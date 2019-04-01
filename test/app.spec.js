/**
 * Created by hea on 3/20/19.
 */
import app from '../src/app';

describe('app', () => {

    describe('AppCtrl', () => {
        let ctrl;

        beforeEach(() => {
            angular.mock.module(app);

            angular.mock.inject(($controller) => {
                ctrl = $controller('AppCtrl', {});
            });
        });

        it('should contain the starter url', () => {
            console.log("My test excuted");
            expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
        });
    });
});