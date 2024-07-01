import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import {getCurrentTimeString} from './utils/getCurrentTimeString.js';

dotenv.config({
  path: "./env",
});
console.log(getCurrentTimeString() + 'Environment variable initialized');

connectDB()
  .then(() => {
    const port = process.env.PORT || 80;
    app.listen(port, () => {
      console.log(`${getCurrentTimeString()}Server is running at PORT ${port}`);
    });
    app.on("error", (err) => {
      console.log("App error: ", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log(getCurrentTimeString() + "MongoDB connection error: ", err);
  });
