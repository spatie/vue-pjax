import Vue from 'vue';
import { merge } from 'lodash';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-PJAX': true,
    'X-Requested-With': 'PJAX',
    'Accept': 'text/html',
};

export const pjax = (container, options) => {

    return Vue.http(merge({},
        { headers },
        { headers: { 'X-PJAX-Container': `pjax-container[name="${container}"]` } },
        options
    ));

};

export default pjax;
