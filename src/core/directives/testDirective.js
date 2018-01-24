/**
 * @file test directive
 * @author lihaizhu
 * @since 2018/01/19
 */
export const TEST_DIRECTIVE_NAME = 'testDirective';

export const TEST_DIRECTIVE = {
    restrict: 'A',
    scope: {},

    controller: class TestDirectiveCtrl {
        constructor() {
            'ngInject';

        }

        getName() {

        }
    },

    controllerAs: 'ctrl',
    bindings: true,

    compile: () => {
        'ngInject';

    },

    link: () => {
        'ngInject';
    }
}
