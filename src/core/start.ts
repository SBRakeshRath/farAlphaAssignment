//hello world
import express from "express";
const app = express();

app.get("/sayHello", (req, res) => {
  res.json({
    message: "Hello User.",
  });
});

const port = 80;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});
