import PjaxContainer from '../components/pjax-container';
import Pjax from '../directives/pjax';

export default {

    components: {
        PjaxContainer,
    },

    directives: {
        Pjax,
    },

    events: {
        ['pjax-replace']({ element, content }) {
            element.innerHTML = content;
            this.$compile(element);
        },
    },

};
