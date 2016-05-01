
// connect app to controller, and inject the service
angular.module('app')
.controller('mainCtrl', function($scope, productService){

// put products on scope and link to the GET request on service page
    $scope.getProducts = function() {
        productService.getProducts()
        .then(function(response) {
            $scope.products = response.data;
        });

    };
    $scope.getProducts();

    $scope.newProduct = {};
    $scope.addProduct = function(product) {
        productService.postProduct(product)
        .then(function(response) {
            $scope.justAdded = "Success! this was just added... " + response.data.title;

        });
        $scope.newProduct = {};
        $scope.getProducts();

    };

    $scope.deleteProduct = function(product) {
        productService.deleteProduct(product)
        .then(function(response) {
            return response;
        });
        $scope.getProducts();
    };

    $scope.select = function(product) {
        $scope.selected = product;
    };

    $scope.selected = {};
    $scope.updateProduct = function(product) {
        productService.updateProduct(product)
        .then(function(response) {
            return response;
        });
        $scope.getProducts();
        $scope.selected = {};
    };

    $scope.clearSelected = function() {
        $scope.selected = {};
    };













});
