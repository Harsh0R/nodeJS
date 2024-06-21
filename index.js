const express = require("express");

const app = express();

app.get("/" , (req ,res) => {
    res.send("<h1>Home</h1>")
})


app.get("/about" , (req ,res) => {

    // res.writeHead(200 , {"Content-type" : "text/plain"})
    // res.write(`<h1>Hello</h1>About`)
    // res.end()
    res.set("Content-type" , "text/plain")
    res.send(`<h1>Hello</h1>About`)
})
app.get("/jsonpage" , (req ,res) => {

    res.set("Content-type" , "text/json")
    res.send(`[
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  {
    "id": 2,
    "name": "Bob Brown",
    "email": "bob@example.com"
  }
]
`)
    res.end()
    // res.set(200 , {"Content-type" : "text/plain"})
    // res.send(`<h1>Hello</h1>About`)
})



app.listen(8000 , () => {console.log("Server is rining...");})