<style scoped="scoped" lang="scss">
.slider-container {
  width: 100%;
  box-sizing: border-box;
  margin-left: 5px;
  margin-right: 5px;
  padding: 15px 0;
}
.slider-content {
  display: flex;
  margin: 15px;
}
.slider-number {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-container .slider-rail {
  height: 3px;
  flex: 1;
}
.slider-container .slider-rail .slider-process {
  height: 3px;
  position: relative;
}
.slider-container .slider-rail .slider-process .slider-controller {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  right: 0;
  transform: translateX(50%) translateY(-50%);
  border: 1px solid #ccc;
  /*touch-action: none;*/
}
</style>

<template>
  <div class="slider-content">
    <div class="slider-container" @click="changePc"
         @mousemove.stop="onDrag"
         @mouseleave="stopDrag"
         @mouseup="stopDrag"
    >
    <div class="slider-rail" ref="rail" :style="[{backgroundColor:backgroundColor}]">
      <div class="slider-process" ref="process" :style="[{backgroundColor:activeColor},{width: `${percent_show * 100}%`}]">
        <i class="slider-controller"
           @touchstart="startDrag"
           @mousedown="startDrag"
           @mouseup="stopDrag"
           @touchmove="onDrag"
           @touchend="stopDrag"
           ref="ctrl"
           @click.stop
           :style="[{backgroundColor:blockColor},{width: blockSize + 'px' },{height: blockSize + 'px'}]"
        ></i>
      </div>
    </div>
  </div>
    <div class="slider-number" v-if="showValue">{{output}}</div>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: "slider",
  data() {
    return {
      percent: 0,
      percent_record: 0,
      percent_show: 0,
      dragging: false,
      change_record: "",
      changing_record: "",
      startX: 0,
      ts: 0,
      disablePageScroll: false,
      listener: false,
      canmove: true
    };
  },
  computed: {
    output() {
      return (
        +this.min +
        Math.round(this.percent_show * (+this.max - +this.min) * 10000) / 10000
      );
    }
  },
  props: {
    min: {
      type: [Number, String],
      default: 0,
      required: false
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    value: {
      type: [Number, String],
      default: 0
    },
    activeColor: {
      type: String,
      default: "#1aad19"
    },
    backgroundColor: {
      type: String,
      default: "#e9e9e9"
    },
    blockSize: {
      type: [Number, String],
      default: 28
    },
    blockColor: {
      type: String,
      default: "#ffffff"
    },
    showValue: {
      type: [Boolean, String],
      default: true
    }
  },
  methods: {
    startDrag(e) {
      if (this.disabled) {
        return;
      }
      const TouchEvent = e.changedTouches ? e.changedTouches[0] : e;
      this.startX = TouchEvent.pageX;
      this.dragging = true;
    },
    onDrag(e) {
      if (this.disabled || !this.canmove) {
        return;
      }
      const TouchEvent = e.changedTouches ? e.changedTouches[0] : e;
      const dX = TouchEvent.pageX - this.startX;
      if (Date.now() - this.ts < 100) {
        return;
      }
      if (Math.abs(dX) > 10) {
        this.disablePageScroll = true;
      }
      if (this.disablePageScroll) {
        e.preventDefault();
      } else {
        return;
      }
      if (this.dragging) {
        this.percent = dX / this.$refs.rail.offsetWidth + this.percent_record;
        this.setWatch_percent();
        this.emitChange();
      }
    },
    stopDrag() {
      this.disablePageScroll = false;
      if (this.disabled) {
        return;
      }
      if (this.dragging) {
        this.dragging = false;
        this.percent_record = this.percent;
        this.emitChange(true);
      }
    },
    setWatch_percent() {
      this.percent = this.percent > 1 ? 1 : this.percent;
      this.percent = this.percent < 0 ? 0 : this.percent;
      if (this.step) {
        // 每次的步数百分比
        const step = +this.step / (+this.max - +this.min);
        this.percent_show = Math.floor(this.percent / step) * step;
        if (this.percent === 1 || this.percent === 0) {
          this.percent_show = this.percent;
        }
      } else {
        this.percent_show = this.percent;
      }
    },
    changePc(e) {
      if (this.disabled) {
        return;
      }
      this.percent = e.offsetX / this.$refs.rail.offsetWidth;
      this.setWatch_percent();
      this.percent_record = this.percent;
      this.emitChange(true);
    },
    emitChange(tag) {
      if (tag) {
        if (this.change_record !== this.output) {
          this.$emit("change", { detail: { value: this.output } });
          this.change_record = this.output;
        }
      } else {
        if (this.changing_record !== this.output) {
          this.$emit("changing", { detail: { value: this.output } });
          this.changing_record = this.output;
        }
      }
    }
  },
  created() {
    window.onscroll = () => {
      this.ts = Date.now();
      this.canmove = false;
      const touchendHandler = () => {
        this.canmove = true;
        document.body.removeEventListener("touchend", touchendHandler);
      };
      document.body.addEventListener("touchend", touchendHandler);
    };
    let value = +this.value;
    if (!value) {
      value = this.min;
    }
    this.percent = (+value - +this.min) / (+this.max - +this.min);
    this.percent_record = this.percent;
    this.percent_show = this.percent;
  }
};
</script>
