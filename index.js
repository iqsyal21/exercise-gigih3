const express = require("express");
const app = express();
const port = 3000;

let users = [
  {
    id: 1,
    name: "Oreki",
    email: "oreki@gmail.com",
  },
  {
    id: 2,
    name: "Houtarou",
    email: "houtarou@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
    const userById = users.find((user) => user.id == req.params.id);
    if(userById == null || userById == undefined) {
        res.send(`user dengan id ${req.params.id} tidak ditemukan`)
    }
    res.send(userById);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
