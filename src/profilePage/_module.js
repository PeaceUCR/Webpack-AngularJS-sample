/**
 * Created by hea on 3/16/19.
 */
import profilePageController from './profilePageController';
import authorPageController from './author/authorPageController';

const MODULE_NAME = 'my.demo.profilePageModule';

angular.module(MODULE_NAME, [
    profilePageController,
    authorPageController
]);

export default MODULE_NAME;