// Create a new application, named "IntroApp"
// The array ['ngRoute'] contains the names (as strings)
// of all the angular services we want to use.
// In our case, we want angular to handle our URL
// routing (so that we can navigate to different pages)
// so we declare it as a dependency.
var app = angular.module("IntroApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {  // RIDICULOUS SYNTAX!
                                                          // `config` is a function, that takes one parameter: an array
                                                          // That array contains a string for each angular component we
                                                          // want to use (most start with a $). In our case, we want to 
                                                          // use the $routeProvider service to set up URL routing.
                                                          // The LAST thing in the array is an anonymous function that
                                                          // has the same number of parameters as there are strings
                                                          // preceding it in the array, and those parameters are by
                                                          // convention, named the same as the strings. The upshot is,
                                                          // we now have access to the $routeProvider in this function.
                                                          // UGG.
  
  // Okay, now we can finally set up our URLs
  $routeProvider.
    when('/', {                                          // If we're at the root URL '/' (e.g., http://ourapp.com/ )
      templateUrl: 'templates/home-template.html',        // then replace the contents of our ng-view tag in index.html 
                                                         // with the html in templates/home-template.html
      controller: "HomeController"
    }).
    when('/other-page', {                      
      templateUrl: 'templates/other-page-template.html'  // If we're at the otherPage URL (e.g., http://ourapp.com/other-page)
                                                         // then replace the contents of our ng-view tag in index.html
                                                         // with the html in templates/other-page-template.html
    }).
    otherwise({
      redirectTo: '/'
    });
  
  
  
}]);

app.controller("HomeController", ['$scope', '$location', function($scope, $location) {
  
  $scope.buttonClick = function() {
    console.log('button click function is running!');
    $location.path('/other-page');
  };
  
}]);
