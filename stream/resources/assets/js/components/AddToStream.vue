<template>
    <div class="message">
        <div class="message-header">
            Push to the Stream
        </div>

        <div class="message-body">
            <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
                <p class="control">
                    <label for="status" class="label">Status:</label>

                    <textarea name="status" id="status" cols="30" rows="10"
                              class="textarea" placeholder="have something to say?"
                              v-model="form.body"></textarea>

                    <span class="help is-danger"
                          v-if="form.errors.has('body')"
                          v-text="form.errors.get('body')"></span>
                </p>

                <p class="control">
                    <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: new Form({ body: ''})
            }
        },

        methods: {
            onSubmit() {
                this.form.post('/statuses')
                    .then(status => this.$emit('statusSubmitted', status))
                    .catch(error => {console.log(error)});
            }
        }
    }
</script>

return new Promise((resolve, reject) => {
axios[requestType](url, this.data())
.then(response => {
this.onSuccess(response.data);

resolve(response.data);
})
.catch(error => {
this.onFail(error.response.data);

reject(error.response.data);
});
});