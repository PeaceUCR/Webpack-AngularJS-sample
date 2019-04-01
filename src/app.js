/**
 * Created by hea on 3/7/19.
 */


import angular from 'angular';
import uirouter from 'angular-ui-router';
import uimask from 'angular-ui-mask';

//import 'bootstrap/dist/css/bootstrap.css';
//if import less, the styles will coming into /build/main.css
import '../styles/main.less';

import apiServiceModule from './service/apiService';

import globalHeaderModule from './header/_module';
import homePageModule from './homePage/_module';
import profilePageModule from './profilePage/_module';

//import globalHeaderDirective from './header/globalHeaderDirective'

const MODULE_NAME = 'my.demo';

const homePageTemplateUrl = require('./homePage/homePage.html');
const profilePageTemplateUrl = require('./profilePage/profilePage.html');
const authorPageTemplateUrl = require('./profilePage/author/authorPage.html');

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}
angular.module(MODULE_NAME, [uirouter, uimask, apiServiceModule, globalHeaderModule, homePageModule, profilePageModule])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        //for the statename, abstract_name.sub_name
        $stateProvider.state('home', {
            logAs: 'home',
            url: "/home",
            templateUrl: homePageTemplateUrl,
            //$scope
            controller : "homePageController",
            //controllerAs over $scope
            //https://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers
            //http://codetunnel.com/angularjs-controller-as-or-scope/
            controllerAs: "hp"
        }).state('profile', {
            abstract: true,
            url: "/profile",
            templateUrl: profilePageTemplateUrl,
            controller : "profilePageController"
        }).state('profile.author', {
            logAs: 'profile-author',
            url: "/author",
            templateUrl: authorPageTemplateUrl,
            controller : "authorPageController"
        })

    }]).controller('AppCtrl', AppCtrl);



export default MODULE_NAME;