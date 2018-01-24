/**
 * @file directives entry
 * @author lihaizhu
 * @since 2018/01/19
 */
import angular from 'angular';

import {
    TEST_DIRECTIVE_NAME,
    TEST_DIRECTIVE
} from './testDirective';

let directivesModule = angular.module('app.directives', []);

directivesModule.directive(
    TEST_DIRECTIVE_NAME,
    TEST_DIRECTIVE);

export default directivesModule.name;
