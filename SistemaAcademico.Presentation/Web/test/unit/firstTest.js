'use strict'

describe('login-controller', function () {
    
    beforeEach(module('sistemaAcademico'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.name', function () {

        it('should be mickey mouse', function () {
            var $scope = {};
            var controller = $controller('loginCtrl', { $scope: $scope });

            expect($scope.name).toEqual("mickey mouse");
        });

    });

});