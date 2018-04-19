<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import Flickity from 'flickity';
    import 'flickity/dist/flickity.min.css';

    export default {
        props: {
            wrapAround: { default: true },
            autoPlay: { default: false }
        },
        mounted() {
            new Flickity(this.$el, {
                wrapAround: this.wrapAround,
                autoPlay: this.autoPlay,
                cellAlign: 'left',
                contain: true
            });
        }
    };
</script>