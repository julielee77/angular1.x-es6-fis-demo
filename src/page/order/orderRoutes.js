/**
 * @file app.order routes
 * @author lihaizhu
 * @since 2018/01/22
 */

export default function orderRoutes($stateProvider) {
    'ngInject';

    let ordersState = {
        name: 'orders',
        url: '/',
        template: __inline('list/orders.html'),
        controller: 'OrdersCtrl',
        controllerAs: 'ctrl'
    };

    let orderState = {
        name: 'orders.detail',
        url: '/orders/:orderId',
        template: __inline('detail/order.html'),
        controller: 'OrderCtrl',
        controllerAs: 'ctrl'
    };

    $stateProvider.state('orders', ordersState);
    $stateProvider.state('orders.detail', orderState);
}
