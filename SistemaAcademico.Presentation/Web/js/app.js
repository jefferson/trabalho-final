'use strict';
var app = angular.module('sistemaAcademico', ['ngRoute', 'LocalStorageModule']);
app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    /* In�cio - dasativar cache e status 304 - not modified*/
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    $httpProvider.defaults.useXDomain = true;
    /* Fim - dasativar cache e status 304 - not modified*/

    delete $httpProvider.defaults.headers.common['X-Requested-With'];


    //Interceptor request
    $httpProvider.interceptors.push('authInterceptorService');

    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
    }).
    when('/student/info', {
        templateUrl: 'partials/students/index.html',
        controller: 'studentsHomeCtrl'
    }).
    when('/coordinator/info', {
        templateUrl: 'partials/coordinators/index.html',
        controller: 'coordinatorsHomeCtrl'
    }).
    when('/coordinator/info-by-course/:param1', {
        templateUrl: 'partials/coordinators/course.html',
        controller: 'coordinatorInfoCourseCtrl'
    }).
    when('/coordinator/info-by-student/:param1', {
        templateUrl: 'partials/coordinators/student.html',
        controller: 'coordinatorInfoStudentCtrl'
    }).
    when('/secretary/info', {
        templateUrl: 'partials/secretaries/index.html',
        controller: 'secretariesHomeCtrl'
    }).
    otherwise({
        redirectTo: '/login'
    });
}])

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
