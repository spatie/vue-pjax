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
        ['pjax-loaded']({ url, container, content }) {

            if (this.name !== container) {
                return;
            }

            this.$dispatch('pjax-replace', {
                url,
                content,
                element: this.$els.container,
            });
        },
    },

};
