/**
 * @file app.home routes
 * @author lihaizhu
 * @since 2018/01/22
 */

export default function homeRoutes($stateProvider) {
    'ngInject';

    let homeState = {
        name: 'home',
        url: '/',
        template: __inline('./home.html'),
        controller: 'HomeCtrl',
        controllerAs: 'ctrl'
    };

    $stateProvider.state('home', homeState);
}
