const express = require('express');
const app = express();
const port = 3000;
var data = require('./data/test.json');
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

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});

