/**
 * @file filters entry
 * @author lihaizhu
 * @since 2018/01/19
 */
import angular from 'angular';

import {
    FORMATE_DATE_FILTER_NAME,
    testFilter
} from './testFilter';

let filtersModule = angular.module('app.filters', []);

filtersModule.filter(
    FORMATE_DATE_FILTER_NAME,
    testFilter);

export default filtersModule.name;
