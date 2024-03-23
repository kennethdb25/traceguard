const express = require("express");
const multer = require("multer");
const CaseRoute = new express.Router();
const CaseModel = require("../models/CaseSchema");
const FormModel = require("../models/FormSchema");

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only image is allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

CaseRoute.post("/api/add-case", upload.single("photo"), async (req, res) => {
  const { filename } = req.file;
  const {
    category,
    caseNumber,
    date,
    itemNumber,
    officer,
    place,
    remarks,
    time,
  } = req.body;

  try {
    const validate = await CaseModel.findOne({ caseNumber: caseNumber });

    if (validate) {
      return res.status(422).json({ error: "Case Number already exists" });
    }

    const finalUser = new CaseModel({
      imgpath: filename,
      category,
      caseNumber,
      date,
      itemNumber,
      officer,
      place,
      remarks,
      time,
    });

    const storeData = await finalUser.save();

    return res.status(201).json({ status: 201, body: storeData });
  } catch (error) {
    console.log(error);
    return res.status(422).json(error);
  }
});

CaseRoute.get("/api/get-cases", async (req, res) => {
  const cat = req.query.category || "";

  try {
    const cases = await CaseModel.find({ category: cat }).sort({ date: -1 });
    return res.status(200).json({ status: 200, body: cases });
  } catch (error) {
    console.log(error);
    return res.status(422).json(error);
  }
});

CaseRoute.get("/api/get-form-details", async (req, res) => {
  const form = req.query.caseNumber || "";

  try {
    const formData = await FormModel.findOne({ caseNumber: form });
    return res.status(200).json({ status: 200, body: formData });
  } catch (error) {
    console.log(error);
    return res.status(422).json(error);
  }
});

CaseRoute.patch("/api/update-form/:caseNumber", async (req, res) => {
  try {
    const id = req.params.caseNumber;
    const {
      caseNumber,
      agencyAndAddress1,
      agencyAndAddress2,
      agencyAndAddress3,
      agencyAndAddress4,
      agencyAndAddress5,
      agencyAndAddress6,
      agencyAndAddress7,
      continuation,
      date1,
      date2,
      date3,
      date4,
      date5,
      date6,
      date7,
      date8,
      receivedBy1,
      receivedBy2,
      receivedBy3,
      remarks1,
      remarks2,
      remarks3,
      remarks4,
      remarks5,
      remarks6,
      remarks7,
      remarks8,
      remarks9,
      time1,
      time2,
      time3,
      time4,
      time5,
      time6,
      time7,
      time8,
      turnedOverBy1,
      turnedOverBy2,
      withdrawnRelease1,
      withdrawnRelease2,
      withdrawnRelease3,
      withdrawnSlipNo,
    } = req.body;

    let getCaseFormToUpdate = await FormModel.findOne({
      caseNumber: id,
    });

    if (!getCaseFormToUpdate) {
      const finalForm = new FormModel({
        caseNumber,
        agencyAndAddress1,
        agencyAndAddress2,
        agencyAndAddress3,
        agencyAndAddress4,
        agencyAndAddress5,
        agencyAndAddress6,
        agencyAndAddress7,
        continuation,
        date1,
        date2,
        date3,
        date4,
        date5,
        date6,
        date7,
        date8,
        receivedBy1,
        receivedBy2,
        receivedBy3,
        remarks1,
        remarks2,
        remarks3,
        remarks4,
        remarks5,
        remarks6,
        remarks7,
        remarks8,
        remarks9,
        time1,
        time2,
        time3,
        time4,
        time5,
        time6,
        time7,
        time8,
        turnedOverBy1,
        turnedOverBy2,
        withdrawnRelease1,
        withdrawnRelease2,
        withdrawnRelease3,
        withdrawnSlipNo,
      });

      const finalData = await finalForm.save();

      return res.status(201).json({ status: 201, finalData });
    } else {
      if (agencyAndAddress1)
        getCaseFormToUpdate.agencyAndAddress1 = agencyAndAddress1;
      if (agencyAndAddress2)
        getCaseFormToUpdate.agencyAndAddress2 = agencyAndAddress2;
      if (agencyAndAddress3)
        getCaseFormToUpdate.agencyAndAddress3 = agencyAndAddress3;
      if (agencyAndAddress4)
        getCaseFormToUpdate.agencyAndAddress4 = agencyAndAddress4;
      if (agencyAndAddress5)
        getCaseFormToUpdate.agencyAndAddress5 = agencyAndAddress5;
      if (agencyAndAddress6)
        getCaseFormToUpdate.agencyAndAddress6 = agencyAndAddress6;
      if (agencyAndAddress7)
        getCaseFormToUpdate.agencyAndAddress7 = agencyAndAddress7;
      if (continuation) getCaseFormToUpdate.continuation = continuation;
      if (date1) getCaseFormToUpdate.date1 = date1;
      if (date2) getCaseFormToUpdate.date2 = date2;
      if (date3) getCaseFormToUpdate.date3 = date3;
      if (date4) getCaseFormToUpdate.date4 = date4;
      if (date5) getCaseFormToUpdate.date5 = date5;
      if (date6) getCaseFormToUpdate.date6 = date6;
      if (date7) getCaseFormToUpdate.date7 = date7;
      if (date8) getCaseFormToUpdate.date8 = date8;
      if (receivedBy1) getCaseFormToUpdate.receivedBy1 = receivedBy1;
      if (receivedBy2) getCaseFormToUpdate.receivedBy2 = receivedBy2;
      if (receivedBy3) getCaseFormToUpdate.receivedBy3 = receivedBy3;
      if (remarks1) getCaseFormToUpdate.remarks1 = remarks1;
      if (remarks2) getCaseFormToUpdate.remarks2 = remarks2;
      if (remarks3) getCaseFormToUpdate.remarks3 = remarks3;
      if (remarks4) getCaseFormToUpdate.remarks4 = remarks4;
      if (remarks5) getCaseFormToUpdate.remarks5 = remarks5;
      if (remarks6) getCaseFormToUpdate.remarks6 = remarks6;
      if (remarks7) getCaseFormToUpdate.remarks7 = remarks7;
      if (remarks8) getCaseFormToUpdate.remarks8 = remarks8;
      if (remarks9) getCaseFormToUpdate.date8 = remarks9;
      if (time1) getCaseFormToUpdate.time1 = time1;
      if (time2) getCaseFormToUpdate.time2 = time2;
      if (time3) getCaseFormToUpdate.time3 = time3;
      if (time4) getCaseFormToUpdate.time4 = time4;
      if (time5) getCaseFormToUpdate.time5 = time5;
      if (time6) getCaseFormToUpdate.time6 = time6;
      if (time7) getCaseFormToUpdate.time7 = time7;
      if (time8) getCaseFormToUpdate.time8 = time8;
      if (turnedOverBy1) getCaseFormToUpdate.turnedOverBy1 = turnedOverBy1;
      if (turnedOverBy2) getCaseFormToUpdate.turnedOverBy2 = turnedOverBy2;
      if (withdrawnRelease1)
        getCaseFormToUpdate.withdrawnRelease1 = withdrawnRelease1;
      if (withdrawnRelease2)
        getCaseFormToUpdate.timwithdrawnRelease2e7 = withdrawnRelease2;
      if (withdrawnRelease3)
        getCaseFormToUpdate.withdrawnRelease3 = withdrawnRelease3;
      if (withdrawnSlipNo)
        getCaseFormToUpdate.withdrawnSlipNo = withdrawnSlipNo;

      const updatedData = await getCaseFormToUpdate.save();

      return res.status(201).json({ status: 201, updatedData });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
});

module.exports = CaseRoute;
