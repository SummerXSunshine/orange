<template>
    <div class="orange-three-col-container">
      <div class="orange-three-col-content blue-bg">左列</div>
      <div class="orange-three-col-flex-content">中间内容</div>
      <div class="orange-three-col-content light-bg">右列</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'orange-center-xy',
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .orange-three-col-container {
    display: flex;
    justify-content: space-between;
  }
  .orange-three-col-content {
    width: 100px;
    height: 200px;
  }
  .orange-three-col-flex-content{
    flex: 1;
  }
  </style>
  