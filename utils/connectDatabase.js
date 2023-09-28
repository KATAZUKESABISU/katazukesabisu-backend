const mongoose = require("mongoose");

const user = process.env.DB_USR;
const pass = process.env.DB_PASS;
const database = process.env.DB_NAME;

mongoose.set("strictQuery", false);
mongoose.connect(
    `mongodb+srv://admin-lamtv:St0swxQFpXWH0W7A@db-katazukesabisu.xr4io2a.mongodb.net/db-katazukesabisu`,
    //`mongodb+srv://${user}:${pass}@tokyo-cluster.cerxhwj.mongodb.net/${database}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database Connected");
});

module.exports = { db };
