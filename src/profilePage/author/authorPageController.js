/**
 * Created by hea on 3/18/19.
 */

const MODULE_NAME = 'my.demo.authorPageController';

angular.module(MODULE_NAME,[])
    .controller('authorPageController', ['$scope', function ($scope) {
        console.log("I am in authorPageController");
    }]);

export default MODULE_NAME;