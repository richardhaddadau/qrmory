const express = require("express");
const webRouter = require("./web.cjs");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(webRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
