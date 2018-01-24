/**
 * @file test filter
 * @author lihaizhu
 * @since 2018/01/19
 */
export const FORMATE_DATE_FILTER_NAME = 'formatDate';

/**
 * formatDate
 *
 * @param {Obejct} date Date
 * @return {string}
 */
export default function formatDate(date) {
    return date.toLocaleDateString();
}
