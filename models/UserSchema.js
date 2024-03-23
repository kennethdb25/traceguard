const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const cipher = require("bcryptjs");
const keys = require("../config/keys");

const UserSchema = new mongoose.Schema({
  badgeNumber: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not a valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await cipher.hash(this.password, 12);
  }
  next();
});

UserSchema.methods.generateAuthToken = async function () {
  try {
    let token24 = jwt.sign({ _id: this._id }, keys.cookieKey, {
      expiresIn: "7d",
    });

    this.tokens = this.tokens.concat({ token: token24 });
    await this.save();
  } catch (error) {
    console.log(error);
  }
};

const UserModel = new mongoose.model("UserInfo", UserSchema);

module.exports = UserModel;
