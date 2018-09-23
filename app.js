angular
    .module('app', ['react-app'])
    .controller('AppController', function ($scope, testService) {
        $scope.testData = testService.getTestData();
    });