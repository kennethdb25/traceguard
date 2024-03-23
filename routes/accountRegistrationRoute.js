const express = require("express");
const AccountRegistrationRoute = new express.Router();
const UserModel = require("../models/UserSchema");

AccountRegistrationRoute.post("/api/registration", async (req, res) => {
  const {
    badgeNumber,
    firstName,
    middleName,
    lastName,
    address,
    age,
    company,
    companyAddress,
    email,
    password,
  } = req.body;

  try {
    const validateBadgeNum = await UserModel.findOne({ badgeNumber });
    const validateEmail = await UserModel.findOne({ email });

    if (validateEmail && validateBadgeNum) {
      return res
        .status(422)
        .json({ error: "Email and Badge Number are already exists" });
    } else if (validateEmail) {
      return res.status(422).json({ error: "Email is already exists" });
    } else if (validateBadgeNum) {
      return res.status(422).json({ error: "Badge Number is already exists" });
    }

    const user = new UserModel({
      badgeNumber: badgeNumber.toString().toUpperCase(),
      firstName: firstName.toUpperCase(),
      middleName: middleName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      address: address.toUpperCase(),
      age,
      company: company.toUpperCase(),
      companyAddress: companyAddress.toUpperCase(),
      accountType: "User",
      email,
      password,
    });

    const finalUser = await user.save();

    return res.status(201).json({ status: 201, body: finalUser });
  } catch (error) {
    console.log(error);
    return res.status(422).json(error);
  }
});

module.exports = AccountRegistrationRoute;
