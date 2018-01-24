/**
 * @file datePicker controller
 * @author lihaizhu
 * @since 2018/01/17
 */
import '_date-picker.less';

export default class DatePickerCtrl {

    constructor($scope) {
        'ngInject';
        
        this.componentName = 'date-picker';
    }

    $onInit() {
        this.date = `${this.year}-${this.month}`;
    }

    getMonth() {
        // TODO
    }

    getYear() {
        // TODO
    }
}
