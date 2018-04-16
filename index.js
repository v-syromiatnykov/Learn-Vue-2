Vue.component('message', {
    props: ['title', 'body'],

    template: `
        <article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete" @click="hideModal"></button>
        </div>
        <div class="message-body">{{ body }}</div>
    </article>
    `,

    data() {
        return {
            isVisible: true
        }
    },

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

Vue.component('modal', {
    template: `
        <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large"
         aria-label="close"
         @click="$emit('close')"></button>
    </div>
    `,

});

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});