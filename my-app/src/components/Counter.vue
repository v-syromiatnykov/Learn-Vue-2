<template>
    <div>
        <h3>The count: {{ count }}</h3>

        <button @click="count++">Increment</button>
    </div>
</template>

<script>
    export default {
        data() {
            return { count: 0 };
        }
    }
</script>