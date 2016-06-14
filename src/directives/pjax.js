import request from '../request';
import serialize from 'form-serialize';

export default {

    bind() {

        const container = this.arg;
        const options = {};
        let eventName;

        switch (this.el.tagName.toLowerCase()) {

            case 'a':
                eventName = 'click';
                options.url = this.el.getAttribute('href');
                break;

            case 'form':
                eventName = 'submit';
                options.url = this.el.getAttribute('action');
                options.method = this.el.getAttribute('method') || 'POST';
                options.data = serialize(this.el);
                break;

            default:
                return;

        }

        this.on(eventName, event => {

            event.preventDefault();

            request(container, options)
                .then(response => {
                    this.vm.$broadcast('pjax-loaded', {
                        container,
                        content: response.data,
                        url: options.url,
                    });
                }, () => {
                    window.location = url;
                });

        })


    },

};
