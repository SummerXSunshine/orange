<template>
    <div class="hello">
        <orangeInlineList></orangeInlineList>
    </div>
  </template>
  
  <script>
  import orangeInlineList from '@/flow/orange-inline-list.vue';
  export default {
    name: 'flow',
    components:{
        orangeInlineList,
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  