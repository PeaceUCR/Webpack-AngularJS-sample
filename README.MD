# This project develop before https://github.com/PeaceUCR/TW-Homework and https://github.com/PeaceUCR/TW-Homework-Onsite Please also check their code unit_test as well, this is mainly for configuration & import

Base on https://github.com/PeaceUCR/Webpack_GetStart

https://dmachat.github.io/angular-webpack-cookbook/Angular-Template-Cache.html

Define JS or RequireJS

https://stackoverflow.com/questions/9507606/when-should-i-use-require-and-when-to-use-define

**How to add angularjs in Webpack instead of direct add script in html???**

http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/

Not working by adding externals at config.js, window is not defined
        
            /*
            externals:{
                'angular': 'angular',
                "jquery": "jquery",
                "bootstrap": "bootstrap"
            },
            */
            
can achieve by             
            
            import angular from 'angular';
 

**How to import module in webpack AnuglarJS ????**  
     
https://stackoverflow.com/questions/46564658/import-angularjs-modules-with-webpack
          
How to deal with templateURL????          

https://stackoverflow.com/questions/33268397/how-can-you-compile-angular-templates-with-webpack

# Tired of include directive template controller running loop, no stop
because the directive finally parsed to whole html file again!!!! loop!!!

**All from the templateUrl in Directive**

How to solve????

**Option 1**

https://stackoverflow.com/questions/52925373/bundle-angular-js-templates-with-webpack-4
https://stackoverflow.com/questions/47996190/how-does-html-webpack-plugin-work-with-html-loader
https://stackoverflow.com/questions/33268397/how-can-you-compile-angular-templates-with-webpack

Use html loader like this
        
        const template = require('./header/globalHeader.html');
        //in directive, use template not templateurl
        template: template

more src in html like img, check this https://webpack.js.org/loaders/html-loader/
        
**Option 2**  

https://stackoverflow.com/questions/33268397/how-can-you-compile-angular-templates-with-webpack

https://www.npmjs.com/package/ngtemplate-loader

So Let's choose **ngtemplate-loader**

https://github.com/WearyMonkey/ngtemplate-loader
https://dmachat.github.io/angular-webpack-cookbook/Angular-Template-Cache.html
https://github.com/WearyMonkey/ngtemplate-loader/issues/74

        
        {
                test: /\.html$/,
                //without this exclude, then err here, window is not  defined
                //https://github.com/WearyMonkey/ngtemplate-loader/issues/74
                exclude: path.resolve(__dirname, './src/index.html'),
                use: [
                     { loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) },
                     { loader: 'html-loader' }
                     ]
        }
        
        const templateUrl = require('./header/globalHeader.html');
        templateUrl: templateUrl,


#Then After Resolving previous issue, start coding controller, directive, service.

**Note, No need to import each time when use. Like "apiService", only import in app.js, then we can directly include in globalHeaderController.js for dependency injection**


#Then ControllerAs vs $Scope
~~For $scope, please only keep props one level, **only $scope.val, NOT $scope.obj.key**,otherwise can't get from template~~
        
        //This conclusion is pending, becasue not work yeaterday but work today!!!
        //Wrong
        $scope.user = {
            userName: "Adam",
            avatar: "https://qlogo3.store.qq.com/qzone/940814202/940814202/100?1421055325"
        };
        /*
        //Correct
         $scope.userName = "Peace";
         $scope.avatar = "https://qlogo3.store.qq.com/qzone/940814202/940814202/100?1421055325";
        */

Another Option for new syntax, this is pending!!!        

                //Not use $scope, use this instead!
                //https://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers
                //http://codetunnel.com/angularjs-controller-as-or-scope/
                //but this way needs ng-controller = "homePageController as hp"


# Then add ui-router
Check the $stateProvider Config, name, url, abstract, $state. at app.js

# Then add angular Form in Homepage!

https://www.w3schools.com/angular/angular_validation.asp

So how we check the isValid of each input fields, by form_name.input_name.$valid

then you can add input props **type="email"** or **pattern="[A-Za-z]{3}"**(only 3 chars), if value not fit, then $valid will be false.

For custom directive for custom validation please check

https://github.com/PeaceUCR/AngularJSDemo/blob/master/app/login/login.js#LC37

or https://www.w3schools.com/angular/angular_validation.asp




#Test

create a test folder

add test.webpack.js, karma.conf.js

in webpack.development.config.js, add the flag to check whether it's running a test. if it's test, disable some loader& plugin

**finally "npm run test".**

**Let's check back details later**
     
     
https://stackoverflow.com/questions/50463079/unexpected-token-const-when-running-webpack-babel-and-karma
https://github.com/karma-runner/karma-chrome-launcher/issues/165     
https://blog.ngconsultant.io/proper-testing-of-angular-js-applications-with-es6-modules-8cf31113873f     
     
     
http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
     
     
      
