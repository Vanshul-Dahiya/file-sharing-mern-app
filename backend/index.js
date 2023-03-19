import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import DBConnection from "./database/db.js";

const PORT = 8000;
const app = express();

app.use(cors());

app.use("/", router);

DBConnection();

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
