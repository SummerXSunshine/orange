<template>
  <div class="toll-container" ref="tollcontainer">
    <input v-model='hex'/>
    <orangeButton :displayText="'转换'" @orange-button-click="hexToRgb"></orangeButton>
    <div :style="composeStyle">{{rgb}}</div>
    <orangeButton :displayText="'点击截图'" @orange-button-click="screenShot"></orangeButton>
    <screenShot v-show="isShow"></screenShot>
  </div>
</template>

<script>
import orangeButton from "../components/orange-button.vue";
import screenShot from '../screenShot/screenShot.vue'
import ScreenShotPlugin from '../screenShot/main'
export default {
  name: 'toll',
  components: {
    orangeButton,
    screenShot,
  },
  data() {
    return {
      hex: '#e93030',
      rgb: '结果',
      isShow: false,
      test: null,
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
    },
    screenShot(){
      this.isShow = true;
      if(!this.test) {
        this.test = new ScreenShotPlugin();
        this.test.load();
      } else {
        this.test.load();
      }
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
