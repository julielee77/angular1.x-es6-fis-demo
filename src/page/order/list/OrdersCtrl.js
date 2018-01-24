/**
 * @file order list controller
 * @author lihaizhu
 * @since 2018/01/22
 */
import 'orders.scss';

export default class OrdersCtrl {
    constructor() {
        'ngInject';

        this.orders = [{
            id: 12,
            title: 'oder 1'
        }, {
            id: 13,
            title: 'order 2'
        }];
    }
}
