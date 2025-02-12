require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");
const mongoose = require("mongoose");

const testRouter = require("./routes/test.route");
const mailRouter = require("./routes/mail.route");

const server = express();

//MIDDLEWARE=============================

// server.use(morgan("default"));

server.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);

server.use(express.json());

server.use("/test", testRouter.router); //Test Router

server.use("/mail", mailRouter.router); //mail Router

server.listen(process.env.PORT, () =>
  console.log(`Run at port ${process.env.PORT}`)
);
