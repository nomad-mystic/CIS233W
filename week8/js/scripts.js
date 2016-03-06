/**
 * Created by endof on 3/3/2016.
 */

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.color = '#000000';

    $scope.salary = 0;
    $scope.pcgt = 0;
    $scope.raise = 0;

    $scope.change = function() {
        $scope.raise = ($scope.salary * ($scope.pcgt) / 100) + $scope.salary;
    }
});
