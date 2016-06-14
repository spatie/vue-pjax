export default {

    props: {
        'name': { required: true },
    },

    template: `
        <div v-el:container>
            <slot></slot>
        </div>
    `,

    events: {
        ['pjax-loaded']({ container, content }) {

            if (this.name !== container) {
                return;
            }

            this.$dispatch('pjax-insert', {
                element: this.$els.container,
                content,
            });
        },
    },

};
