import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { DATA_LIMIT } from "./constants.js";

const app = express();
const corsConfig = { origin: process.env.CORS_ORIGIN, credentials: true };
const jsonConfig = { limit: DATA_LIMIT };
const urlEncodingConfig = { limit: DATA_LIMIT, extended: true };

app.use(cors(corsConfig));
app.use(express.json(jsonConfig));
app.use(express.urlencoded(urlEncodingConfig));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
