const express = require("express");
const { router } = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

app.listen(PORT, (err) => {
  !err ? console.log(`App running on ${PORT}`) : console.log(err);
});
