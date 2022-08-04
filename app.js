const express = require("express");
const path = require ("path");

const app = express();

app.use(express.static("public"));

app.listen(3000, ()=> {
    console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
    res.sendFile(path.join (__dirname, "./views/index.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join (__dirname, "./views/register.html"))
});