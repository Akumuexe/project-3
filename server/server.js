const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  await User.create({ username, password });
  res.json({
    username,
    password,
  });
});

mongoose.connection.on("error", console.error.bind(console, "Connection error!"));
mongoose.connection.once("open", function () {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
