var Product = require('./ProductSchema');

module.exports = {
    create: function(req, res, next) {
        var product = new Product(req.body);
        product.save(function(err, p) {
            if (err) {
                return res.send(err);
            } else {
                return res.send(p);
            }
        });
    },

    index: function(req, res, next) {
        Product.findById(req.params.id, function(err, response) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(response);
            }
        });
    },

    show: function(req, res, next) {
        Product.find(req.query, function(err, response) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(response);
            }
        });
    },

    update: function(req, res, next) {
        if (!req.params.id) {
            return res.status(400).send('item ID query required');
        }
        Product.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(response);
            }
        });
    },

    delete: function(req, res, next) {
        if (!req.params.id) {
            return res.status(400).send('item ID query required');
        }
        Product.findByIdAndRemove(req.params.id, function(err, response) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(response);
            }
        });
    }
};
