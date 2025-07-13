const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(PORT, () => {
  console.log(`السيرفر شغال على http://localhost:${PORT}`);
});
