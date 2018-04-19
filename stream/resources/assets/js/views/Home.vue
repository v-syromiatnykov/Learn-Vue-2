<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>

                        {{ status.created_at | ago }}
                    </div>

                    <div class="message-body" v-text="status.body"></div>
                </div>

                <add-to-stream @statusSubmitted="addToStream"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';
    import AddToStream from '../components/AddToStream';

    export default {
        components: { AddToStream },

        data() {
            return {
                statuses: []
            }
        },

        filters: {
            ago(date) {
                return moment(date).fromNow();
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
            addToStream(status) {
                // console.log(status);
                this.statuses.unshift(status);
            }
        }
    }
</script>
