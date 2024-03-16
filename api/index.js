import express from "express";

const app = express();
const PORT = 3006;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
