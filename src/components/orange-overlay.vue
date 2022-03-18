<template>
  <div class="orange-overlay">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-overlay',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orange-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--orange-overlay-zIndexed);
  width: 100%;
  height: 100%;
  background-color: var(--orange-overlay-bg-color);
}
.orange-overlay .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
