<template>
    <div class="tab-card-wrap" :style="composePaneStyle" @transitionend.stop>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'card-pane',
    computed: {
        composePaneStyle() {
            return {
                width: `${this.cardWidth}px`,
            }
        },
        cardWidth() {
            return this.$parent.cardWidth;
        }
    },
    mounted() {
        console.log(this.$parent);
    }
}
</script>
<style scoped>
.tab-card-wrap {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    height: 100%;
}
</style>