if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

require("./utils/connectDatabase");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const route = require("./routes");

const app = express();

// Access-Control-Allow-Origin header
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://katazukesabisu.com",
      "https://admin.katazukesabisu.com",
      "https://ads.katazukesabisu.com",
    ],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

app.listen(process.env.PORT || "3000", () => {
  console.log("Serving on port 3000");
});
