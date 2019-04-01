/**
 * Created by hea on 3/16/19.
 */
const MODULE_NAME = 'my.demo.globalHeaderDirective';

const templateUrl = require('./globalHeader.html');

angular.module(MODULE_NAME, [])
    .directive('globalHeader', function(){
        return {
            restrict:'E',
            templateUrl: templateUrl,
            controller: "globalHeaderController"
        };
    });


export default MODULE_NAME;