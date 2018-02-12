const express = require('express');
var app = express();

//set port 
var port = process.env.PORT || 7777;

app.use(express.static(__dirname));

//routes
app.get("/", (req, res, next) => {
        res.render("index");
})

app.listen(port, () => {
    console.log("bagdeEditor app starting ...")
})