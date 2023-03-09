<template>
	<div class="tab-content-wrap" :style="{height}">
		<div class="tab-move-content"
			@transitionend="transitionEnd"
			@touchstart="touchStart"
			@touchmove="touchMove"
			@touchend="touchEnd" :style="{transform: 'translateX(' + tabPosition + 'px)', 
			transition: banAnimation ? '' : 'all 300ms ease 0s'}">
			<slot></slot>
		</div>
		<slot name="bodySlot"></slot>
	</div>
</template>

<script>
export default {
	name: 'card-swipe',
	props: {
		sensitivity: {
			default: 0.2,
			type: Number,
		},
        modelValue: {},
		height: {
			default: 'auto',
			type: String,
		},
		cardWidth: {
			default: 200,
			type: Number,
		},
        tabNumAct: {
            type: Number,
            default: 0,
        },
        // 自动轮播相关配置
        carousel: {
            default: true,
        },
        carouselDuration: {
            default: 6000,
        },
	},
	data() {
		return {
            // 自动轮播定时器
            carousleTimer: null,
			startX: 0,
			startY: 0,
			firstMoveX: 0,
			firstMoveY: 0,
			banAnimation: false,
			isDragging: false,
			direction: 0,
			tempCurrent: 0,
			tempMoveX: 0,
		}
	},
	computed: {
		tabNum() {
            return this.tabNumAct || this.$children.length;
		},
		tabPosition() {
			return -this.modelValue * this.cardWidth + this.tempMoveX;
		},
	},
	methods: {
        setCarouselTimer() {
            if(this.carousel) {
                this.carouselTimer = setInterval(() => {
                    if(this.modelValue + 1 < this.tabNumAct) {
                        this.$emit('update:modelValue', this.modelValue + 1);
                    } else {
                        this.$emit('update:modelValue', 0);
                    }
                }, this.carouselDuration);
            }
        },
        clearCarouselTimer() {
            if(this.carouselTimer) {
                clearInterval(this.carouselTimer);
            }
        },
		touchStart(e) {
            this.clearCarouselTimer();
			this.startX = e.changedTouches[0].pageX;
			this.startY = e.changedTouches[0].pageY;
			this.firstMoveX = 0;
			this.firstMoveY = 0;
			this.banAnimation = true;
			this.isDragging = false;
			this.direction = 0;
		},
		touchMove(e) {
            this.clearCarouselTimer();
			const moveX = e.changedTouches[0].pageX - this.startX;
			this.firstMoveX = e.changedTouches[0].pageY - this.startX;
			this.firstMoveY = e.changedTouches[0].pageY - this.startY;

			if (!this.isDragging) {
				this.isDragging = true;
				this.direction = Math.abs(this.firstMoveX) - Math.abs(this.firstMoveY);
				if (this.direction > 0) {
					this.$emit('on-drag-start');
				}
			}

			if (this.direction > 0) {
				if (e.cancelable) e.preventDefault();
				e.stopPropagation();
				this.limitMoveArea(moveX);
			}
		},
		touchEnd() {
            this.setCarouselTimer();
			if (this.direction > 0) { // 发生了x方向的移动
				if (this.tempMoveX === 0) { // 说明移动未成功
					this.$emit('on-change-end', this.modelValue);
				}
				this.tempMoveX = 0;
				this.$emit('update:modelValue', this.tempCurrent);
			}
			this.banAnimation = false;
		},
		transitionEnd() {
			this.$emit('on-change-end', this.vlaue);
		},
		limitMoveArea(moveX) {
			const current = this.computedCurrent(moveX);
			const moveNum = this.tabNum - 1;
			this.tempMoveX = moveX;

			if (current <= 0) {
				this.tempCurrent = 0;
			} else if (current >= moveNum) {
				this.tempCurrent = moveNum;
			} else {
				this.tempCurrent = current;
			}

			if (this.tempMoveX <= -(moveNum - this.modelValue) * this.cardWidth) {
				this.tempMoveX = -(moveNum - this.modelValue) * this.cardWidth;
			} 
			if (this.tempMoveX >= this.modelValue * this.cardWidth) {
				this.tempMoveX = this.modelValue * this.cardWidth;
			}
		},
		computedCurrent(moveX) {
			let current = 0;
			let direction = 0;
			if (moveX != 0) direction = -moveX / Math.abs(moveX);
			const lastMoveX = Math.abs(moveX) % this.cardWidth;
			const index = Math.floor(Math.abs(moveX) / this.cardWidth);
			if (lastMoveX > this.cardWidth * this.sensitivity) { // 滑动距离大于页卡的1/5
				current = this.modelValue + direction * (index + 1);
			} else {
				current = this.modelValue + direction * index;
			}
			return current;
		}
	},
    mounted() {
        this.setCarouselTimer();
    }
}
</script>

<style scoped>
	.tab-content-wrap{
		overflow: hidden;
		position: relative;
	}
	.tab-move-content{
		white-space: nowrap;
		height: 100%;
		/**
		* 让容器可以被子元素撑开，以解决ios tab滑动至第二个之后时，不可再继续滑动的bug
		**/
		width: fit-content;
	}
</style>