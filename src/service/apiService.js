/**
 * Created by hea on 3/17/19.
 */

const MODULE_NAME = 'apiServiceModule';

angular.module(MODULE_NAME,[]).factory('apiService',['$q','$http',function ($q, $http) {
    return {
        getUser: function () {
            const url = '/api/user'
            var deferred = $q.defer();
            $http.get(url).then(function (response) {
                console.log(response);
                //ajax resolve
                deferred.resolve(response.data);

            },function (response) {
                //ajax reject
                deferred.reject('request reject:'+response);
            })

            return deferred.promise;
        }
    }
}]);

export default MODULE_NAME;