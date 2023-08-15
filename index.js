const express = require('express');
const app = express();
const port = 3000;

//EJS is our view engine
app.set("view engine","ejs");

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/index",{"title":title});
});

app.get('/seattle', (req, res) => {
  let title = "Seattle Page";
  res.render("pages/seattle",{"title":title});
});

app.get('/technology', (req, res) => {
  let title = "Technology Page";
  res.render("pages/technology",{"title":title});
});

app.get('/afghanistan', (req, res) => {
  let title = "Afghanistan Page";
  res.render("pages/afghanistan",{"title":title});
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

