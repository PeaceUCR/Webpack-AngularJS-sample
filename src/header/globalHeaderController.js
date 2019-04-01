/**
 * Created by hea on 3/16/19.
 */

const MODULE_NAME = 'my.demo.globalHeaderController';

angular.module(MODULE_NAME,['apiServiceModule'])
    .controller('globalHeaderController', ['$scope', 'apiService', function ($scope, apiService) {

        apiService.getUser().then((response)=>{
            console.log(response);
            $scope.user = response;
            /*
            $scope.userName = response.userName;
            $scope.avatar = response.avatar;
            */
        });

        console.log("I am in my.demo.globalHeaderController");
    }]);

export default MODULE_NAME;
