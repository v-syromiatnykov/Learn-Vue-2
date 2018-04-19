export default {
    template: '<div><h1>{{ message | capitalize }}</h1></div>',

    props: ['message'],

    filters: {
        capitalize(message) {
            return message.toUpperCase();
        }
    }

    // data() {
    //     return {
    //         message: 'Hello World'
    //     };
    // }
};
