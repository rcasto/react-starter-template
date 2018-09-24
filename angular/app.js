angular
    .module('app', ['react-app'])
    .controller('AppController', function ($scope, testService) {
        $scope.testData = testService.getTestData();
    })
    .service('angularService', function () {
        this.testAngularMethod = function () {
            return 'angularjs service called';
        };
    });