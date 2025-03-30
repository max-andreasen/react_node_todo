const express = require('express')
const app = express()
const cors = require('cors');  // Import the cors module

app.use(cors());

app.get("/myapi", (req, res) =>{
    res.json({"tasks": ["task1", "task2", "task3"]})
})

app.listen(5000, () => {console.log("Server started listening on port 5000")})