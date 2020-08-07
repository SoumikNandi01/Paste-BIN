const express  = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

var listItems = [];

app.get("/", function (req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var currentDate = today.toLocaleDateString("en-US", options);

  res.render('list', {
    date: currentDate,
    items: listItems
  });
});


app.post("/", function(req, res){
  var newItem = req.body.item;
  listItems.push(newItem);
  res.redirect("/");
});


app.listen("3000", function () {
  console.log("Server up at 3000s");
})
