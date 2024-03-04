import express from "express";
import cookieParser from "cookie-parser";
import { DATA_LIMIT } from "./constants.js";

const app = express();
const jsonConfig = { limit: DATA_LIMIT };
const urlEncodingConfig = { limit: DATA_LIMIT, extended: true };

app.use(express.json(jsonConfig));
app.use(express.urlencoded(urlEncodingConfig));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
