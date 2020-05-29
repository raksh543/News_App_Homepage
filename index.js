const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/horizontalCard');
var cardRoute = require('./routes/cardRoutes');

const adminRouter = require('./routes/admin-router')
// var http = require('http');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://monchu:monchu@cluster0-dgfgi.mongodb.net/NewsReact?retryWrites=true&w=majority", { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/news-react-app`);

app.use('/admin', adminRouter)
app.use(bodyParser.json());
app.use(cardRoute);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });




if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        console.log("here")
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
    app.get('/politics', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', '/Politics'))
    })
  
  }
  

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`)
    });

// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//     })
// }).listen(PORT, () => {
//   console.log(`app running on port ${PORT}`)
// });