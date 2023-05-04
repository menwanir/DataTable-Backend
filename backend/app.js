const express = require("express");
const cors = require('cors')
const fs = require("fs");
const router = require("./routes/user_route");

const User = require("./models/table.model");
const app = express();
const port = 8000;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.get("/", (req, res) => {});

app.use(router);


module.exports = app;
