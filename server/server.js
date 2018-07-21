const express = require('express');

const app = express();

const port = 5000;

app.get("/", (req, res) => {
    res.send("It works!")
});

app.get("/api/customers", (req, res) => {
    const data = [
        {
            id: 0,
            nameFirst: "John",
            nameLast: "Smith"
        },
        {
            id: 1,
            nameFirst: "Bob",
            nameLast: "Jones"
        },
        {
            id: 2,
            nameFirst: "Will",
            nameLast: "Doe"
        },
        {
            id: 3,
            nameFirst: "Holy",
            nameLast: "Shizenhower"
        }
    ];

    res.json(data);

});

app.listen(port, () => console.log("back-end server started on port: " + port));