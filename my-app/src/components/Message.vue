<template>
    <div class="box">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .box {
        background: grey;
        padding: 10px;
        border: 1px solid #c5c5c5;
        margin-bottom: 1em;
    }
</style>