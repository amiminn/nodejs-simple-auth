import cookieParser from "cookie-parser";
import logger from "morgan";
import express from "express";
import router from "./routes/index.js";
import cors from "cors";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(router);

app.listen(5000, () => console.log("Server up and running..."));
