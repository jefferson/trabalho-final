'user strict';

app.controller('loginCtrl', function ($scope, $location, authService) {

    $scope.message = "";
    $scope.name = "mickey mouse";


    $scope.login = function (user) {
        authService.login(user).then(function (response) {
            $scope.authentication = authService.authentication;
            $location.path('/students');
        },
         function (err) {
             $scope.message = err.error_description;
         });
    }
});

