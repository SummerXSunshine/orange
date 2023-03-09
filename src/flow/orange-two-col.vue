<template>
    <div class="orange-two-col-container">
      <div class="orange-two-col-content blue-bg">左列</div>
      <div class="orange-two-col-content light-bg">右列</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'orange-center-xy',
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .orange-two-col-container {
    display: flex;
    justify-content: space-between;
  }
  .orange-two-col-content {
    width: 50%;
    height: 200px;
  }
  </style>
  