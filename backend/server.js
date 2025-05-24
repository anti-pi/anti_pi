const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 9000;

app.get("/", (req, res) => {
    res.send("WELCOME");
});

app.listen(PORT, () => {
    console.log(`Server at http://localhost:${PORT}`);
});