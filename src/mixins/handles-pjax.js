import PjaxContainer from '../components/pjax-container';
import PjaxForm from '../directives/pjax-form';
import PjaxLink from '../directives/pjax-link';

export default {

    components: {
        PjaxContainer,
    },

    directives: {
        PjaxForm,
        PjaxLink,
    },

    events: {
        ['pjax-insert']({ element, content }) {
            element.innerHTML = content;
            this.$compile(element);
        },
    },

};
