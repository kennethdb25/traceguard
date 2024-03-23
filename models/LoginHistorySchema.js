const mongoose = require("mongoose");

const LoginHistorySchema = new mongoose.Schema({
  badgeNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateAndTime: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
});

const LoginHistoryModel = new mongoose.model(
  "LoginHistory",
  LoginHistorySchema
);

module.exports = LoginHistoryModel;
