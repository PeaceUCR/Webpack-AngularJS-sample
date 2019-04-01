/**
 * Created by hea on 3/16/19.
 */
import globalHeaderController from './globalHeaderController'
import globalHeaderDirective from './globalHeaderDirective'

const MODULE_NAME = 'my.demo.globalHeaderModule';

angular.module(MODULE_NAME, [
    globalHeaderController,
    globalHeaderDirective
])

export default MODULE_NAME;