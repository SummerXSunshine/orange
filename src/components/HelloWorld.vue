<template>
  <div class="hello">
    <div class="button" @click="openTopPopup">打开顶部遮罩</div>
    <div class="button" @click="openLeftPopup">打开左侧遮罩</div>
    <div class="button" @click="openBottomPopup">打开底部遮罩</div>
    <div class="button" @click="openRightPopup">打开右侧遮罩</div>
    <orangeOverlay v-show="showOverlay" @click="closeOverlay"></orangeOverlay>
    <orange-popup v-show="showOverlay" :style="popupStyle" :position="dir"></orange-popup>
  </div>
</template>

<script>
import orangeOverlay from './orange-overlay.vue';
import orangePopup from './orange-popup.vue'

export default {
  name: 'HelloWorld',
  components: {
    orangeOverlay,
    orangePopup,
  },
  data() {
    return {
      showOverlay: false,
      dir: '',
    }
  },
  computed: {
    popupStyle(){
      return {
        height: '300px',
        zIndex: 999,
      };
    } 
  },
  methods: {
    openTopPopup(){
      this.dir = 'top';
      this.openOverlay();
    },
    openBottomPopup(){
      this.dir = 'bottom';
      this.openOverlay();
    },
    openLeftPopup(){
      this.dir = 'left';
      this.openOverlay();
    },
    openRightPopup(){
      this.dir = 'right';
      this.openOverlay();
    },
    openOverlay() {
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  padding: 10px 10px;
  border-radius: 4px;
}
</style>
