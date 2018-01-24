/**
 * @file services entry
 * @author lihaizhu
 * @since 2018/01/19
 */

import angular from 'angular';

import {
    TEST_SRV_NAME,
    TestSrv
} from './testSrv';

let servicesModule = angular.module('app.services', []);

servicesModule.service(
    TEST_SRV_NAME,
    TestSrv);

export default servicesModule.name;
