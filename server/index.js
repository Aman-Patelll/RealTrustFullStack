import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import cloudinary from "cloudinary";

const app = express(); // creating app server

app.use(cors({
  origin: "https://realtrust-full-stack.vercel.app", // or use '*' to allow all origins
  credentials: true, // if you are dealing with cookies
}));

dotenv.config();
connectDB(); // db connection

cloudinary.v2.config({
	cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
	api_key: process.env.CLOUDINARY_CLIENT_API,
	api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
	return res.status(200).send("<h1>Welcome to Node server</h1>");
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server Running on port ${port}`));
