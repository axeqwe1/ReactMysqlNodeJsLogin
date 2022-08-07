const express = require('express');
const db = require('./db/db');
const parser = require("body-parser");
const cors = require('cors');
var port = process.env.port || 3000;
const app = express();
const router = require('./Route/user-route')

app.use(express.json());
app.use(cors());
app.use('/user', router);

app.listen(port,() => console.log("server runing on port:",port));