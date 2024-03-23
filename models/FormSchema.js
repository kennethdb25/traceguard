const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  caseNumber: {
    type: String,
    required: true,
  },
  agencyAndAddress1: {
    type: String,
  },
  agencyAndAddress2: {
    type: String,
  },
  agencyAndAddress3: {
    type: String,
  },
  agencyAndAddress4: {
    type: String,
  },
  agencyAndAddress5: {
    type: String,
  },
  agencyAndAddress6: {
    type: String,
  },
  agencyAndAddress7: {
    type: String,
  },
  continuation: {
    type: String,
  },
  date1: {
    type: String,
  },
  date2: {
    type: String,
  },
  date3: {
    type: String,
  },
  date4: {
    type: String,
  },
  date5: {
    type: String,
  },
  date6: {
    type: String,
  },
  date7: {
    type: String,
  },
  date8: {
    type: String,
  },
  receivedBy1: {
    type: String,
  },
  receivedBy2: {
    type: String,
  },
  receivedBy3: {
    type: String,
  },
  remarks1: {
    type: String,
  },
  remarks2: {
    type: String,
  },
  remarks3: {
    type: String,
  },
  remarks4: {
    type: String,
  },
  remarks5: {
    type: String,
  },
  remarks6: {
    type: String,
  },
  remarks7: {
    type: String,
  },
  remarks8: {
    type: String,
  },
  remarks9: {
    type: String,
  },
  time1: {
    type: String,
  },
  time2: {
    type: String,
  },
  time3: {
    type: String,
  },
  time4: {
    type: String,
  },
  time5: {
    type: String,
  },
  time6: {
    type: String,
  },
  time7: {
    type: String,
  },
  time8: {
    type: String,
  },
  turnedOverBy1: {
    type: String,
  },
  turnedOverBy2: {
    type: String,
  },
  withdrawnRelease1: {
    type: String,
  },
  withdrawnRelease2: {
    type: String,
  },
  withdrawnRelease3: {
    type: String,
  },
  withdrawnSlipNo: {
    type: String,
  },
});

const FormModel = new mongoose.model("Form", FormSchema);

module.exports = FormModel;
