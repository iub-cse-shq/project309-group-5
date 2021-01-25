var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var server = http.Server(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

var Products = require('./product.model')
var Users = require('./user.model')





//Database Connection


var mongoose = require('mongoose');
const { static } = require('express');
mongoose.Promise = global.Promise
var dbURL = 'mongodb://localhost:27017/myShop'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', function (err) {
  console.log(err)
})





//server routes

app.get('/', function (request, response) {
  Products.find({}, function (err, data) {
    response.render('index.ejs', {
      products: data,
      title: "Home Page"
    })
  })
})
app.get('/seller', function (request, response) {
  Products.find({}, function (err, data) {
    response.render('seller.ejs', {
      products: data,
      title: "Home Page"
    })
  })
})


app.get('/cart', function (request, response) {
  response.sendFile(__dirname + '/cart.html')
})


app.get('/signup', function (request, response) {
  response.sendFile(__dirname + '/signup.html')
})
app.get('/login', function (request, response) {
  response.sendFile(__dirname + '/login.html')
})

// ADmin routes
app.get('/admin', function (request, response) {
  response.sendFile(__dirname + '/views/admin.html')
})
//  buyer
app.get('/seller', function (request, response) {
  response.sendFile(__dirname + '/views/seller.html')
})

app.post('/login', function (request, response) {
  //console.log(request.body.email)
  Users.find({ email: request.body.email, password: request.body.password, accounttype: request.body.accounttype }, (err, data) => {
    if (data.length == 0) {
      console.log("Error")
    } else {
      console.log("DATA", data[0].accounttype)

      if (data[0].accounttype == "Admin") {

        app.get('/login/admin', function (request, response) {
          response.render('admin.ejs', {
            data: data,
            title: "Home Page"
          })
        })
      } else if (data[0].accounttype == "Buyer") {
        //console.log("Buyer")

        Users.findById(data[0].id, function (err, data) {
          response.render('buyer.ejs', {
            data: data,

            title: "Single Product"
          })
        })

        // app.get('/login/buyer', function (request, response) {
        //   response.render('buyer.ejs', {
        //     data: data,
        //     title: "Home Page"
        //   })
        // })
      } else {
        app.get('/seller', function (request, response) {

          response.render('seller.ejs', {
            data: data,
            title: "Home Page"
          })
        })
      }




    }
  })


})





app.get('/addproductPage', function (request, response) {
  console.log(__dirname)
  response.sendFile(__dirname + '/addproductPage.html')
})

app.post('/product/new', function (request, response) {
  var newProduct = new Products(request.body)
  newProduct.save(function (err, data) {
    if (err)
      return response.status(400).json({
        error: 'Title is missing'
      })
    return response.status(200).json({
      message: 'Article created successfully'
    })
  })
})

//New User Post
app.post('/user/new', function (request, response) {



  var newUser = new Users(request.body)
  newUser.save(function (err, data) {
    if (err)
      return response.status(400).json({

      })
    return response.status(200).json({
      message: 'User created successfully'
    })
  })
})









server.listen(process.env.PORT || 3000,
  process.env.IP || 'localhost', function () {
    console.log('Server running');
  })

app.use(express.static('public/css'));
app.use(express.static('public/script'));
app.use(express.static('public/script'));
app.use(express.static('public/bootstrap/css'));
app.use(express.static('public/bootstrap/js'));


module.exports = { app, server, mongoose }