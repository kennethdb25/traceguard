const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  imgpath: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  caseNumber: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  itemNumber: {
    type: String,
    required: true,
  },
  officer: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const CaseModel = new mongoose.model("Case", CaseSchema);

module.exports = CaseModel;
