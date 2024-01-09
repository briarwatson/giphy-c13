const express = require('express');

const app = express();

app.get("/", (req, res) => res.send("Hello World"));

app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcryot.hash(req.body.password, 10);
        res.send(hashedPassword);

    } catch (err) {
        res.send(err);
    }
})

app.all("*", (req, res) => res.redirect("/"));

app.listen(3000, () => console.log("Server is listening on port 3000"));