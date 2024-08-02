const express = require("express");
const router = require("./routes");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());


app.use("/", router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


