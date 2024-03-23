const express = require("express");
const path = require("path");
const cors = require("cors");
require("./database/conn");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000; // server port

//ROUTES
const AccountRegistrationRoute = require("./routes/accountRegistrationRoute");
const LoginRoute = require("./routes/loginRoute");
const LoginHistoryRoute = require("./routes/loginHistory");
const CaseRoute = require("./routes/caseRoute");

app.use(AccountRegistrationRoute);
app.use(LoginRoute);
app.use(LoginHistoryRoute);
app.use(CaseRoute);

app.use("/uploads", express.static("./uploads"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
