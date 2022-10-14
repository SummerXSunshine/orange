<template>
    <div class="tab-card-wrap" :style="composePaneStyle" @transitionend.stop>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'card-pane',
    props: {
        cardWidth: {
            default: 200,
			type: Number,
        }
    },
    computed: {
        composePaneStyle() {
            return {
                width: `${this.cardWidth}px`,
            }
        },
    },
    mounted() {
        console.log(this.cardWidth);
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