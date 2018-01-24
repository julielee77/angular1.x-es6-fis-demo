/**
 * @file app
 * @author lihaizhu
 * @since 2017/01/12
 */
/* css frameworks */

/* common css */
import 'static/css/common.less';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routes from './routes';

// injector modules
import componentsModule from 'src/core/components';
import directivesModule from 'src/core/directives';
import filtersModule from 'src/core/filters';
import servicesModule from 'src/core/services';

// page modules
import homeModule from 'src/page/home';
import orderModule from 'src/page/order';

let injectors = [
    uirouter,
    // di modules
    componentsModule,
    directivesModule,
    filtersModule,
    servicesModule,
    // page modules
    homeModule,
    orderModule
];

angular.module('app', injectors)
    .config(routes);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
