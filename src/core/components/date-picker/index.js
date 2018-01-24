/**
 * @file datePicker component entry
 * @author lihaizhu
 * @since 2018/01/22
 */
import DatePickerCtrl from './DatePickerCtrl';

export const DATE_PICKER_COMPONENT_NAME = 'datePicker';

export const DATE_PICKER_COMPONENT = {
    restrict: 'E',
    bindings: {
        year: '<',
        month: '<'
    },
    template: __inline('./date-picker.tpl.html'),
    controller: DatePickerCtrl,
    // 默认 $ctrl
    controllerAs: 'ctrl'
};
