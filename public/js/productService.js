
// connect productService to homeApp, inject $http
angular.module('app')
.service('productService', function($http){

    this.getProducts = function() {
        return $http({
            method: 'GET',
            url: 'api/products'
        })
        // success callback
        .then(function(response) {
            return response;
        });
    };

    this.postProduct = function(product) {
        return $http({
            method: 'POST',
            url: 'api/products',
            data: product
        })
        .then(
            // success callback
            function(response) {
                return response;
            },
            // failure callback
            function(response) {
                return response;
            }
        );
    };

    this.deleteProduct = function(product) {
        return $http({
            method: 'DELETE',
            url: '/api/products/' + product._id
        }).then(function(response) {
            return response;
        });
    };

    this.updateProduct = function(product) {
        return $http({
            method: 'PUT',
            url: '/api/products/' + product._id,
            data: {
                title: product.title,
                description: product.description,
                price: product.price,
            }
        });
    };



});
