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

    this.cutBoxStartX = 0;
    this.cutBoxStartY = 0;
    this.cutBoxWidth = this.screnShotContainerWidth;
    this.cutBoxHeight = this.screnShotContainerHeight;
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
      this.addCutBoxEventListener(canvasContainer);
      canvasContainer.appendChild(this.screnShotContainer);
    })
  }

  drawCutBox(
    startX = 0,
    startY = 0,
    boxWidth,
    boxHeight,
  ) {
    // 清除画布
    const context = this.screnShotContainer.getContext('2d');
    context.clearRect(0, 0, this.screnShotContainerWidth, this.screnShotContainerHeight);
    // 绘制蒙层
    context.fillStyle = "rgba(0, 0, 0, 0.6)";
    context.fillRect(0, 0, this.screnShotContainerWidth, this.screnShotContainerHeight);
    context.save();
    context.restore();
    // 绘制裁剪区
    context.clearRect(startX, startY, boxWidth, boxHeight);
    context.save();
    context.restore();
    // 绘制到canvas画布的底部原始图片
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

  addCutBoxEventListener(targetDom){
    // 添加裁剪框的监听
    targetDom.addEventListener('touchstart', (e) => {
      const position = targetDom.getBoundingClientRect();
      this.containerX = position.x;
      this.containerY = position.y;
      this.isDragging = true;
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
      // 原点坐标
      this.originX = this.cutBoxStartX + this.containerX;
      this.originY = this.cutBoxStartY + this.containerY;
      // 右下角坐标
      this.endX = this.originX + this.cutBoxWidth;
      this.endY = this.originY + this.cutBoxHeight;
      this.cutBoxStatus = 'moving';
    });
    targetDom.addEventListener('touchmove', (e) => {
      if(this.isDragging) {
        console.log('touchmove');
        const moveX = e.touches[0].clientX - this.startX;
        const moveY = e.touches[0].clientY - this.startY;
        switch(this.cutBoxStatus) {
          case 'moving': 
            this.tempCutBoxStarX = this.cutBoxStartX + moveX;
            this.tempCutBoxStarY = this.cutBoxStartY + moveY;
            break;
        }
        this.drawCutBox(
          this.tempCutBoxStarX,
          this.tempCutBoxStarY,
          this.cutBoxWidth,
          this.cutBoxHeight
          )
      }
    });
    targetDom.addEventListener('touchend', () => {
      // 
      this.cutBoxStartX = this.tempCutBoxStarX;
      this.cutBoxStartY = this.tempCutBoxStarY;
    });
  }

  getImage() {
    const saveImage = this.screnShotContainer.getContext('2d');
    const imageData = saveImage.getImageData(
      this.cutBoxStartX,
      this.cutBoxStartY,
      this.cutBoxWidth,
      this,this.cutBoxHeight,
    )
    // 获取图片数据
    const resCanvas = document.createElement('canvas');
    resCanvas.height = this.screnShotContainerHeight;
    resCanvas.width = this.screnShotContainerWidth;
    const resCanvasContext = this.screnShotContainer.getContext('2d');
    resCanvasContext.clearRect(0, 0, this.screnShotContainerWidth, this.screnShotContainerHeight);
    resCanvasContext.putImageData(imageData, 0, 0);
    resCanvasContext.save();
    resCanvasContext.restore();
    return resCanvas.getDataURL();
  }
}