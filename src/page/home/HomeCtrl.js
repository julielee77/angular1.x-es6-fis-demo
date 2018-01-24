/**
 * @file --page home
 * @author lihaizhu
 * @since 2017/01/12
 */
import 'home.scss';

export default class HomeCtrl {

    constructor() {
        'ngInject';

        this.name = 'home page';

        // datePicker
        let curDate = new Date();
        this.currentDate = {
            year: curDate.getFullYear(),
            month: curDate.getMonth() + 1
        };
    }

    getName() {
        return this.name;
    }
}
