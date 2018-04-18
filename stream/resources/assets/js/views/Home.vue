<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>

                        {{ postedOn(status) }}
                    </div>

                    <div class="message-body" v-text="status.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';

    export default {
        data() {
            return {
                statuses: []
            }
        },

        mounted() {
            console.log('Component mounted.');
        },

        created() {
            console.log('Component created.');
            Status.all(statuses => this.statuses = statuses);
        },

        methods: {
            postedOn(status) {
                return moment(status.created_at).fromNow();
            }
        }
    }
</script>
