const mongoose = require("mongoose");

const user = process.env.DB_USR;
const pass = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${user}:${pass}@db-katazukesabisu.xr4io2a.mongodb.net/db-katazukesabisu`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
mongoose.set('strictQuery', true);

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database Connected");
});