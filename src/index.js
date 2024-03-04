import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    const port = process.env.PORT || 80;
    app.listen(port, () => {
      console.log(`Server is running at PORT ${port}`);
    });
    app.on("error", (err) => {
      console.log("App error: ", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });
