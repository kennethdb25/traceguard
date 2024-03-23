const express = require("express");
const cipher = require("bcryptjs");
const LoginRoute = new express.Router();
const UserModel = require("../models/UserSchema");
const LoginHistoryModel = require("../models/LoginHistorySchema");
const authenticateUser = require("../middleware/authenticate");

LoginRoute.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userEmail = await UserModel.findOne({
      email: email,
    });
    if (userEmail) {
      const isMatch = await cipher.compare(password, userEmail.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid Email or Password" });
        // validation for pending or disabled accounts
      } else {
        const token = await userEmail.generateAuthToken();

        res.cookie("UserCookie", token, {
          expire: new Date(Date.now + 604800000),
          httpOnly: true,
        });

        const loginHistory = new LoginHistoryModel({
          badgeNumber: userEmail.badgeNumber,
          email,
          dateAndTime: new Date().toISOString(),
          action: "LOGGED IN",
        });

        await loginHistory.save();

        const result = {
          userEmail,
          token,
        };
        return res.status(201).json({ status: 201, result });
      }
    } else {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.log(error);
  }
});

LoginRoute.get("/api/valid", authenticateUser, async (req, res) => {
  try {
    const validUser = await UserModel.findOne({ _id: req.userId });
    return res.status(201).json({ validUser });
  } catch (error) {
    return res.status(401).json({ status: 401, error });
  }
});

LoginRoute.get("/api/logout", authenticateUser, async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((currElem) => {
      return currElem != req.token;
    });

    res.clearCookie("UserCookie", { path: "/" });

    req.rootUser.save();

    return res.status(201).json({ status: 201 });
  } catch (error) {
    console.log(error);
  }
});

LoginRoute.post("/api/logout-history", async (req, res) => {
  const { email } = req.body;

  try {
    const userEmail = await UserModel.findOne({
      email: email,
    });

    const logoutHistory = new LoginHistoryModel({
      badgeNumber: userEmail.badgeNumber,
      email,
      dateAndTime: new Date().toISOString(),
      action: "LOGGED OUT",
    });

    const finalData = await logoutHistory.save();

    return res.status(201).json({ status: 201, finalData });
  } catch (error) {
    console.log(error);
  }
});

// adding logout history

module.exports = LoginRoute;
