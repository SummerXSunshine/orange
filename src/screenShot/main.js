import html2canvas from "html2canvas";

const defaultHtml2CanvasOptions = {
  useCORS:true,
}

export default class ScreenShot {
  constructor() {
    this.html2CanvasOptions = defaultHtml2CanvasOptions;
    this.screnShotContainer = null;
    this.screnShotContainerWidth = window.innerWidth;
    this.screnShotContainerHeight = window.innerHeight;
    this.imageContainer = null;
  }

  load() {
    const targetElement = document.body;
    const canvasContainer = document.getElementById('screen-shot-container');
    html2canvas(targetElement, this.html2CanvasOptions).then((canvas) => {
      if(!targetElement) return;
      this.imageContainer = canvas;
      // 创建截图容器
      if(!this.screnShotContainer) {
        this.screnShotContainer = document.createElement('canvas');
      }
      this.screnShotContainer.height = this.screnShotContainerHeight;
      this.screnShotContainer.width = this.screnShotContainerWidth;
      // 初始化裁剪框的位置
      this.cutBoxStartX = 0;
      this.cutBoxStartY = 0;
      this.cutBoxWidth = this.screnShotContainerWidth;
      this.cutBoxHeight = this.screnShotContainerHeight;
      this.drawCutBox(
        this.cutBoxStartX,
        this.cutBoxStartY,
        this.cutBoxWidth,
        this.cutBoxHeight,
      );
      canvasContainer.appendChild(this.screnShotContainer);
    })
  }

  drawCutBox(
    startX = 0,
    startY = 0,
    boxWidht = 0,
    boxHeight = 0,
  ) {
    const context = this.screnShotContainer.getContext('2d');
    context.fillStyle = "rgba(0, 0, 0, 0.6)";
    context.fillRect(0, 0, this.screnShotContainerWidth, this.screnShotContainerHeight);
    context.save();
    context.restore();
    context.clearRect(startX, startY, boxWidht, boxHeight);
    context.save();
    context.restore();
    // 原始图片绘制到canvas的底部
    context.globalCompositeOperation = 'destination-over';
    context.drawImage(
      this.imageContainer,
      0,
      0,
      this.screnShotContainerWidth,
      this.screnShotContainerHeight,
    )
    context.save();
    context.restore();
  }
}