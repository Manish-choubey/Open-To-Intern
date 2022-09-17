const express = require('express');
const mongoose= require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/routes.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://functionup-cohert:2aZSPLpUOON7ZWA2@cluster0.sl0yd7n.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', routes)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});