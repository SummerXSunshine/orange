<template>
  <div class="hello">
    <orangeSwitch v-model="switchModel"></orangeSwitch>
    <div class="button" @click="openTopPopup">打开顶部遮罩</div>
    <div class="button" @click="openLeftPopup">打开左侧遮罩</div>
    <div class="button" @click="openBottomPopup">打开底部遮罩</div>
    <div class="button" @click="openRightPopup">打开右侧遮罩</div>
    <orangeOverlay v-show="showOverlay" @click="closeOverlay"></orangeOverlay>
    <orange-popup v-show="showOverlay" :style="popupStyle" :position="dir"></orange-popup>
    <orangeCenterXy class="demo-card"></orangeCenterXy>
    <div>二列均分</div>
    <orangeTwoCol></orangeTwoCol>
    <div>三列均分，2定宽1自适应</div>
    <orange-three-col></orange-three-col>
    <div>竖直均分</div>
    <orangeTwoRow></orangeTwoRow>
    <cardSwipe v-model="swipeIndex" :cardWidth="375" :tabNumAct="swipeData.length">
      <cardPane :cardWidth="375" v-for="(item, index) in swipeData" :key="index">
        <div class="card-bg">{{item}}</div>
      </cardPane>
    </cardSwipe>
    <orangeCollapseList :listData="collapseData">
      <template slot="list-item" slot-scope="slotProps">
        <div classs="test-list-item">{{slotProps.item}}</div>
      </template>
    </orangeCollapseList>
  </div>
</template>

<script>
import orangeSwitch from '@/components/switch/orange-switch.vue';
import orangeOverlay from '@/components/orange-overlay.vue';
import orangePopup from '@/components/orange-popup.vue';
import orangeCenterXy from '@/flow/orange-center-xy.vue';
import orangeTwoCol from '@/flow/orange-two-col.vue';
import orangeThreeCol from '@/flow/orange-three-col.vue';
import orangeTwoRow from '@/flow/orange-two-row.vue';

import cardSwipe from '@/components/swiper/card-swipe.vue';
import cardPane from '@/components/swiper/card-pane.vue';
import orangeCollapseList from '@/components/collapseList/orange-collapse-list.vue'

export default {
  name: 'HelloWorld',
  components: {
    orangeSwitch,
    orangeOverlay,
    orangePopup,
    orangeCenterXy,
    orangeTwoCol,
    orangeThreeCol,
    orangeTwoRow,
    // 轮播组件
    cardSwipe,
    cardPane,
    // 折叠卡片组件
    orangeCollapseList,
  },
  data() {
    return {
      switchModel: false,
      showOverlay: false,
      dir: '',
      swipeIndex: 0,
      swipeData: [1,2,3,4,5],
      collapseData: ['one', 'two', 'three'],
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
.card-bg {
  width: 375px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
}
.test-list-item{
  height: 20px;
  display: flex;
  align-items: center;
}
</style>
