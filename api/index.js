const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserModel = require("./models/User.js");
require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(10);
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("text ok");
});

//
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const User = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(User);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const User = UserModel.findOne({ email, password });
  if (User) {
    res.json("found");
  } else {
    res.json("not found");
  }
});

app.listen(4000);
