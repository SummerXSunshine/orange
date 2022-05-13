<template>
  <div v-show="isShow" class="screen-shot-container">
    <div class="canvas-container" id="screen-shot-container"></div>
    <div class="tool-bar">
      <div class="tool-bar-item">取消</div>
      <div class="tool-bar-item">确实</div>
      <div class="tool-bar-item">发送</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'screenShot',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.screen-shot-container{
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 60px 20px;
  background: #000;
  top: 0;
}
.canvas-container{
  display: flex;
  position: relative;
}
.tool-bar {
  position: absolute;
  bottom: 0;
  display: flex;
}
.tool-bar-item {
  background: #262626;
  padding: 10px 10px;
  border-radius: 4px;
  color: #fff;
}
</style>>
