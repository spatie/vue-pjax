import request from '../request';
import serialize from 'form-serialize';

export default {

    bind() {

        switch (this.el.tagName.toLowerCase()) {

            case 'a':
                this.on('click', handleLinkClick.bind(this));
                break;

            case 'form':
                this.on('submit', handleFormSubmit.bind(this));
                break;

        }
    },

};

function handleFormSubmit(event) {
    event.preventDefault();

    const container = this.arg;
    const url = this.el.getAttribute('action');
    const method = this.el.getAttribute('method') || 'POST';
    const data = serialize(this.el);

    request(container, { url, method, data })
        .then(response => {
            this.vm.$broadcast('pjax-loaded', {
                container,
                content: response.data,
            });
        }, () => {
            window.location = url;
        });
}

function handleLinkClick(event) {
    event.preventDefault();

    const container = this.arg;
    const url = this.el.getAttribute('href');

    request(container, { url, method: 'GET' })
        .then(response => {
            this.vm.$broadcast('pjax-loaded', {
                container,
                content: response.data,
            });
        }, () => {
            window.location = url;
        });
}
