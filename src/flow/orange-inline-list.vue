<!-- 横向平铺的列表 -->
<template>
    <ul class="inline-list-container">
        <li class="inline-list-item">1</li>
        <li class="inline-list-item">2</li>
        <li class="inline-list-item">3</li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'orange-center-xy',
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .inline-list-container {


  }
  .inline-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .inline-list-item:last-child {
    margin-right: 0;
  }
  </style>
  