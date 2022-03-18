<template>
  <div class="orange-popup" :class="composeClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'orange-popup',
  props: {
    position: {
      type: String,
      default: 'bottom',
    }
  },
  computed: {
    composeClass() {
      const  base = 'orange-popup-';
      const containerClass = `${base}${this.position}`
      return containerClass;
    }
  }
}
</script>

<style scoped>
.orange-popup{
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  background: var(--orange-popup-bg-color);
  transition: var(--orange-popup-transition);
  --webkit-overflow-scrolling: touch;
}
.orange-popup-top{
  top: 0;
  left: 0;
  width: 100%;
}
.orange-popup-bottom{
  bottom: 0;
  left: 0;
  width: 100%;
}
.orange-popup-left{
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.orange-popup-right{
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
</style>