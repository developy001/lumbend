import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";


const app = express();
const PORT = 3001;
app.use(express.json())

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));

  app.use('/user', userRoute)

  app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
  } )