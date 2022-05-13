import { defineComponent } from 'vue'
import ScreenShotComponent from "./screenShot.vue";
import ScreenShot from "./main";

const ScreenShotPlugin = {};

ScreenShotPlugin.install = (Vue) => {
  const ScreenShotConstructor = defineComponent(ScreenShotComponent);
  console.log(ScreenShotConstructor);
  window.xyr = ScreenShotConstructor;
  const instance = ScreenShotConstructor;
  document.body.append(instance.$el);

  Vue.prototype.$screenShot = {
    load() {
      instance.isShow = true;
      instance.ScreenShot = new ScreenShot();
    }
  }
}

export default ScreenShotPlugin;