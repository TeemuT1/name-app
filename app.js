const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("build"));

app.listen(PORT, () => {
  console.log("server started on port 5000");
});