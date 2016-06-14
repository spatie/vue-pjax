import pjax from './pjax';

export default {

    bind() {
        this.on('click', event => {
            event.preventDefault();

            const container = this.arg;
            const url = this.el.getAttribute('href');

            pjax(container, { url, method: 'GET' })
                .then(response => {
                    this.vm.$broadcast('pjax-loaded', {
                        container,
                        content: response.data,
                    });
                }, () => {
                    window.location = url;
                });
        });
    },

};
