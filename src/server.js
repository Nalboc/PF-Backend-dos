import express from "express";
import userRoute from "./routes/user.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoute);
const stringConection = process.env.MONGO_URL;
mongoose
  .connect(stringConection, { dbName: "Users" })
  .then(() => console.log("Conectado a mongodb"))
  .catch((e) => console.log(e));

app.listen(8080, () => {
  console.log("server on port 8080");
});
app.get("/", (req, res) => {
  res.json({ mensaje: "hola" });
});
