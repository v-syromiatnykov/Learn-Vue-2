// let store = {
//     user: {
//         name: 'John Doe'
//     }
// };
//
// new Vue({
//     el: '#one',
//
//     data: {
//         shared: store
//     }
// });
// new Vue({
//     el: '#two',
//
//     data: {
//         shared: store
//     }
// });

Vue.component('coupon', {
    props: ['value'],

    template: `
        <input type="text"
               :value="value"
               @input="updateCode($event.target.value)"
               ref="input">
    `,

    methods: {
        updateCode(code) {
            // Atttach validation + sanitization here.

            this.$emit('input', code);
        }
    }
});


new Vue({
    el: '#app',

    data: {
        coupon: 'FREEBIE' // Maybe from DB or querystring.
    }
});