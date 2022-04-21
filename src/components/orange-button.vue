<template>
  <div class="orange-button" @click="buttonClick">{{displayText}}</div>
</template>

<script>
export default {
  name: 'orange-button',
  props: {
    displayText:{
      type: String,
      default: 'orange按钮'
    }
  },
  methods:{
    buttonClick(){
      this.$emit('orange-button-click');
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orange-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFF67F;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
