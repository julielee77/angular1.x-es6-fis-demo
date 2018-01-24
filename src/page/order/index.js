/**
 * @file app.order index
 * @author lihaizhu
 * @since 2018/01/22
 */
import angular from 'angular';
import orderRoutes from './orderRoutes';

import OrdersCtrl from './list/OrdersCtrl';
import OrderCtrl from './detail/OrderCtrl';

let orderModule = angular.module('app.order', []);
orderModule.config(orderRoutes);

// controllers
orderModule.controller('OrdersCtrl', OrdersCtrl);

orderModule.controller('OrderCtrl', OrderCtrl);

// components ...
// services ...

export default orderModule.name;