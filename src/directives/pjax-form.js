import pjax from './pjax';
import serialize from 'form-serialize';

export default {

    bind() {
        this.on('submit', event => {
            event.preventDefault();

            const container = this.arg;
            const url = this.el.getAttribute('action');
            const method = this.el.getAttribute('method') || 'POST';
            const data = serialize(this.el);

            pjax(container, { url, method, data })
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
