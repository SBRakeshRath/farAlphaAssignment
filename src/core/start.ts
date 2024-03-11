//hello world
import express from "express";
const app = express();

app.get("/sayHello", (req, res) => {
  res.json({
    message: "Hello User. it's running",
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});
