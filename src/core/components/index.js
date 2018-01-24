/**
 * @file components entry
 * @author lihaizhu
 * @since 2017/01/19
 */
import angular from 'angular';

import {
    DATE_PICKER_COMPONENT_NAME,
    DATE_PICKER_COMPONENT
} from './date-picker';

let componentsModule = angular.module('app.components', []);

componentsModule.component(
    DATE_PICKER_COMPONENT_NAME,
    DATE_PICKER_COMPONENT);

export default componentsModule.name;
