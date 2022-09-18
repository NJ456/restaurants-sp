// connect to mongodb
// set up express
// add menu array object to database
const menu = require('../menu.js')
const order = require('../order.js')
const { engine } = require ('express-handlebars');
const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const mongoose = require('mongoose')
const {testItem} = require('../order.js')
// console.log(menu);
// console.log(template)
/* can't require menu.js file trying to find // Fixed: I moved app.js into server
 folder, nodemon couldn't path that's why it was breaking*/
 // can't import menu array into app.js file
//../ moves it up to the root directory

 mongoose.connect("mongodb://localhost:27017/restaurants", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const datab = mongoose.connection;
datab.on("error", console.error.bind(console, "connection error:"));
datab.on("open", function () {
  console.log("connection successfull");
});

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/hi', async function (req, res) {
    // This object is passed to the Handlebars template.
    const templateData = {
        name: 'world'
    };

    // This renders the Handlebars view at `views/home.handlebars`.
    res.render('home', templateData);
});

app.get('/', (req,res) => {
  res.send('Hello, Good Morning World!')
})
//
// app.post('/confirm.html', (req,res) => {
//   res.send(template)
// })

// app.get('/menu', (req,res) => {
//   res.send('Menu items here')
// })

app.get("/order", (req,res) => {
  const menuData = {
    menu : testItem
  }
  // console.log(menuData,"HERE")
  res.render('order', menuData);
})
// new route here that displays the menu
app.post("/confirm", (req,res) => {
  res.render('confirm');
})

//
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
