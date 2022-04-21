<template>
  <div class="toll-container">
    <input v-model='hex'/>
    <orangeButton :displayText="'转换'" @orange-button-click="hexToRgb"></orangeButton>
    <div :style="composeStyle">{{rgb}}</div>
  </div>
</template>

<script>
import orangeButton from "../components/orange-button.vue"
export default {
  name: 'toll',
  components: {
    orangeButton,
  },
  data() {
    return {
      hex: '#e93030',
      rgb: '结果',
    }
  },
  computed:{
    composeStyle() {
      return {
        color: `${this.hex}`,
      };
    }
  },
  methods:{
    hexToRgb(){
      console.log(this.hex)
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);
      const rgbRes = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
      this.rgb = rgbRes;
      console.log(`rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toll-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
