import Vue from 'vue';
import merge from 'lodash.merge';

export const request = (container, options) => {

    return Vue.http(merge(
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'text/html',
                'X-Requested-With': 'PJAX',
                'X-PJAX': true,
                'X-PJAX-Container': `pjax[name="${container}"]`,
            },
        },
        options
    ));

};

export default request;
