import mongoose from "mongoose";
import {getCurrentTimeString} from '../utils/getCurrentTimeString.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `${getCurrentTimeString()}MongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(getCurrentTimeString() + "MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
