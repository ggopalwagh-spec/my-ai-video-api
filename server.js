
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Gopal AI API",
    status: "Running",
    message: "Welcome to Gopal AI"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "Gopal AI API is working!"
  });
});

app.post("/api/caption", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Please provide text"
    });
  }

  res.json({
    success: true,
    caption: text
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Gopal AI API running on port ${PORT}`);
});
