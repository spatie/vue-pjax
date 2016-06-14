import request from '../request';
import serialize from 'form-serialize';

export default {

    bind() {
        switch (this.tagName) {

            case 'a':
                this.on('click', handleLinkClick);
                break;

            case 'form':
                this.on('submit', handleFormSubmit);
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

    pjax(container, { url, method, data })
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

    pjax(container, { url, method: 'GET' })
        .then(response => {
            this.vm.$broadcast('pjax-loaded', {
                container,
                content: response.data,
            });
        }, () => {
            window.location = url;
        });
}
