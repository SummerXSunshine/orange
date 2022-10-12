<template>
    <div class="orange-collapse-list-container">
        <div v-for="(item, index) in displayListData" :key="index">
            <slot name="list-item" :item="item"></slot>
        </div>
    </div>
  </template>
  
  <script>
  export default {
        name: 'orange-collapse-list',
        props: {
            listData: {
                default: [],
            },
            collapseStatus: {
                default: true,
            },
            collapseNums: {
                type: Number,
                default: 4,
            }
        },
        computed: {
            displayListData() {
                const { listData, collapseStatus, collapseNums } = this;
                if(collapseStatus) {
                    return listData.slice(0, collapseNums);
                }
                return listData;
            },
        },
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  