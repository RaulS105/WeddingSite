const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

port = 3000

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

app.get("/rsvp", function(req, res)
{
    res.render("rsvp.html");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })