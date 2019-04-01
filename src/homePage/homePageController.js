/**
 * Created by hea on 3/18/19.
 */

const MODULE_NAME = 'my.demo.homePageController';

angular.module(MODULE_NAME,[])
    .controller('homePageController', ['$scope', '$state', function ($scope, $state) {
        /* $scope
        $scope.formInit = function () {
            console.log("I am form init");
        };

        $scope.goToProfile = function () {
            $state.go('profile.author');
        };

        $scope.submit = function () {
            console.log("submit the form");
            console.log({
                name: $scope.name,
                dob: $scope.dob,
                phone: $scope.phone,
                email: $scope.email
            });
        }
        */

        //controllerAs over $scope
        //check the state controller config
        //https://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers
        //http://codetunnel.com/angularjs-controller-as-or-scope/
        let hp = this;

        hp.formInit = function () {
            console.log("I am form init");
        };

        hp.goToProfile = function () {
            $state.go('profile.author');
        };

        hp.submit = function () {
            console.log("submit the form");
            console.log({
                name: hp.name,
                dob: hp.dob,
                phone: hp.phone,
                email: hp.email
            });
        }
    }]);

export default MODULE_NAME;