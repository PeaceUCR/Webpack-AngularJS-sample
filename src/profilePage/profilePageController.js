/**
 * Created by hea on 3/18/19.
 */

const MODULE_NAME = 'my.demo.profilePageController';

angular.module(MODULE_NAME,[])
    .controller('profilePageController', [function () {
        //Not use $scope, use this instead!
        var controller =  this;
        console.log("I am in profilePageController");
    }]);

export default MODULE_NAME;