const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    title: "Greetings",
    content: "Let's build a task manager app!",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
