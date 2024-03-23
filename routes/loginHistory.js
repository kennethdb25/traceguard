const express = require("express");
const LoginHistoryRoute = new express.Router();
const LoginHistoryModel = require("../models/LoginHistorySchema");

LoginHistoryRoute.get("/api/login-history", async (req, res) => {
  const badge = req.query.badgeNumber || "";

  try {
    const loginHistory = await LoginHistoryModel.find({
      badgeNumber: badge,
    }).sort({ dateAndTime: -1 });
    return res.status(200).json({ status: 200, body: loginHistory });
  } catch (error) {
    console.log(error);
    return res.status(422).json(error);
  }
});

module.exports = LoginHistoryRoute;
