var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var db = mongojs('ecommerce', ['products']);

var app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

// POST items to products collection
app.post('/api/products', function(req, res, next) {
    db.products.save(req.body, function(err, response) {
        if(err) {
            return res.status(500).json(err);
        } else {
            console.log(req.body);
            return res.json(req.body);
        }
    });
});

// GET items by query - like products?name=PurpleShirt
app.get('/api/products', function(req, res, next) {
    db.products.find(req.query, function(err, response) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(response);
        }
    });
});


//  GET by product parameters -- Except that this one breaks the one below
//  or vice versa... it seems that you cannot have two GET requests that both
//  call for /api/products/:id  \/\/\/

// app.get('/api/products/:id', function(req, res, next) {
//     db.products.find(req.params.id, function(err, response) {
//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.json(response);
//         }
//     });
// });



// GET by mongo _id number
app.get('/api/products/:id', function(req, res, next) {
    var query = {
        _id: mongojs.ObjectId(req.params.id)
    };
    db.products.findOne(query, function(err, response) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(response);
        }
    });
});

// PUT by mongo _id number
app.put('/api/products/:id', function(req, res, next) {
    if (!req.params.id) {
        return res.status(400).send('item ID query required');
    }
    var query = {
        _id: mongojs.ObjectId(req.params.id)
    };
    db.products.update(query, req.body, function(err, response) {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json(response);
        }
    });
});

// DELETE by mongo _id ONLY
app.delete('/api/products/:id', function(req, res, next) {
    if (!req.params.id) {
        return res.status(400).send('item ID query required');
    }
    var query = {
        _id: mongojs.ObjectId(req.params.id)
    };
    db.products.remove(query, function(err, response) {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json(response);
        }
    });

});




var port = 3000;
app.listen(port, function() {
    console.log('---------------------------------');
    console.log('LISTENING FOR ALIENS ON PORT', port);
    console.log('---------------------------------');
});
