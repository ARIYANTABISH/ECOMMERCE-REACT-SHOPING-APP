const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db.js");
const authRoutes = require("./routers/authRoute.js");
const cors = require("cors");
const app = express();

dotenv.config();

// database connection
connectDB();

// json data
app.use(express.json());
// morgan
app.use(morgan("dev"));
app.use(cors());
// port number
const port = process.env.POTT || 8080;

// all routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>xexone world </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
