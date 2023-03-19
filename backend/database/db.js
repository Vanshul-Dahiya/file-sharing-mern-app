import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

export default DBConnection;
