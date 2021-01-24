var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var server = http.Server(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//server routes go here

app.get('/', function (request, response) {
  Products.find({}, function (err, data) {
    response.render('cliend/index.ejs', {
      products: data,
      title: "Home Page"
    })
  })
})

app.get('/singleProduct/:id', function (request, response) {
  console.log(request.params.id)

  Products.findById(request.params.id, function (err, data) {
    console.log(data)
    response.render('singleproduct.ejs', {
      singleProduct: data,

      title: "Single Product"
    })
  })

})



app.get('/cart', function (request, response) {
  console.log(__dirname)
  response.sendFile(__dirname + '/cart.html')
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



var Products = require('./product.model')


var mongoose = require('mongoose');
const { static } = require('express');
mongoose.Promise = global.Promise
var dbURL = 'mongodb://localhost:27017/myShop'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', function (err) {
  console.log(err)
})


server.listen(process.env.PORT || 3000,
  process.env.IP || 'localhost', function () {
    console.log('Server running');
  })

app.use(express.static('public/css'));
app.use(express.static('public/script'));
app.use(express.static('public/bootstrap/css'));
app.use(express.static('public/bootstrap/js'));
app.use(express.static('client/'));


module.exports = { app, server, mongoose }