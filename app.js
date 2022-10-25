const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res)
{
    res.render("home.html");
});

app.get("/directions", function(req, res)
{
   res.render("directions.html"); 
});

app.get("/information", function(req, res)
{
    res.render("information.html");
});

app.get("/RSVP", function(req, res)
{
    res.render("/RSVP.html");
});

app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Express server is running");
});