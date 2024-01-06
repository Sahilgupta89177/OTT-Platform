const express = require("express");
const app = express()
const port = 8009;
const cors =require("cors")
const router = require("./routes/router")
require("./db/connection.js")
const cookiParser = require("cookie-parser")



// app.get("/", (req, res) => {
//     res.status(201).json("server created")
// });


app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})