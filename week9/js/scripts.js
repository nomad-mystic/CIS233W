/**
 * Created by endof on 3/3/2016.
 */

var app = angular.module('myApp', []);

app.controller('myController', ['$scope', '$http', function($scope, $http) {

    $http.get('data/movies.json')
        .success(function(movies) {
            $scope.movies = movies;
            console.log(movies);
    });

    $scope.sortBy = function(typeOfSort) {
        $scope.sorted = typeOfSort;
    }
}]);
