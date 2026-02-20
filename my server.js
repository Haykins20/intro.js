
const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res) => res.send("MY WEEK TWO API"));

app.post("/user", (req, res) =>  {
    const { name, email } = req.body;
    res.send('Hello, [name]!');
    if (!name || !email) return res.status(400).json({ error: "missing data" });
});

app.get("/user/:[id]", (req, res) => {
    res.json({ id: req.params.id, name: "User [id] profile" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('API live on port ${PORT}'));