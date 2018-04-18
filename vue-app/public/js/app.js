let store = {
    user: {
        name: 'John Doe'
    }
};

new Vue({
    el: '#one',

    data: {
        shared: store
    }
});
new Vue({
    el: '#two',

    data: {
        shared: store
    }
});