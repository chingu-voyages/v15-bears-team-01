const express = require("./node_modules/express");
const app = express();
require("dotenv").config();
var cors = require("cors");
var bodyParser = require("body-parser");
const passport = require("passport");
const auth = require("./Authentication/auth_routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use("/", auth);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${5000}`));
