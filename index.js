const express = require("express");
const { users } = require("./data/users.json");

const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});

app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

app.get("*", (req, res) => {
    res.status(404).json({
        message: "This route does not exist",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
