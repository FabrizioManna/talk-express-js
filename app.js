const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
    resp.send("Hello World!")
});

app.get("*", (req, resp) => resp.status(404));

app.listen(3000, (req, resp) => {
    console.log("🚀 SERVER LISTEN ON PORT: 3000");
});