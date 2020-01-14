/*
=============================================
EXPRESS SERVER SETUP
=============================================
*/

const express = require("./node_modules/express");
const app = express();

/*
============================================
EXPRESS SERVER  - Running Server
============================================
*/
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${5000}`));
