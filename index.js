var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Product = require('./ProductSchema');
var crud = require('./crudCtrl');

var app = express();

var corsOptions = {
    origin: 'http://localhost:3030'
};


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
// The additional function shown below is simply to throw an error if
// a connection to the database fails.
mongoose.connect('mongodb://localhost/products', function(err) {
    if (err) {
        throw err;
    }
});


// POST items to products collection
app.post('/api/products', crud.create);
// GET items by query - like products?name=PurpleShirt
app.get('/api/products', crud.show);
// GET by mongo _id number
app.get('/api/products/:id', crud.index);
// PUT by mongo _id number
app.put('/api/products/:id', crud.update);
// DELETE by mongo _id ONLY
app.delete('/api/products/:id', crud.delete);


var port = 3030;
app.listen(port, function() {
    console.log('---------------------------------');
    console.log('LISTENING FOR ALIENS ON PORT', port);
    console.log('---------------------------------');
});
