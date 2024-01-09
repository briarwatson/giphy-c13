const express = require('express');

const app = express();

app.get("/", (req, res) => res.send("Hello World"));

app.all("*", (req, res) => res.redirect("/"));

app.listen(3000, () => console.log("Server is listening on port 3000"));