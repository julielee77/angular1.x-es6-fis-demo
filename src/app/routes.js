/**
 * @file routes
 * @author lihaizhu
 * @since 2018/01/12
 */

export default function routes($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/');
}
