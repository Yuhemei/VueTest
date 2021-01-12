<template>
  <div>
    <!-- cavas 是行内的 -->
    <ul>
      <li><canvas width="150px" height="150px" ref="canvas0"></canvas></li>
      <li><canvas width="150px" height="150px" ref="canvas1"></canvas></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvasL: [],
    };
  },
  mounted() {
    this.canvasL.push(this.getCanvas(this.$refs.canvas0));
    this.canvasL.push(this.getCanvas(this.$refs.canvas1));
    console.log(this.canvasL[0]);
    if (this.canvasL[0].canvas.getContext) {
      console.log("canvas surpported");
      // 1. ctx提供了3种绘制方法
      // fillRect(x, y, width, height)
      // 绘制一个填充的矩形
      // strokeRect(x, y, width, height)
      // 绘制一个矩形的边框
      // clearRect(x, y, width, height)
      // 清除指定矩形区域，让清除部分完全透明。
      //   两个阴影
      let ctx0 = this.canvasL[0].ctx;
      ctx0.fillStyle = "rgb(200,0,0)";
      ctx0.fillRect(10, 10, 55, 50);

      ctx0.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx0.fillRect(30, 30, 55, 50);

      // 三种方法
      let ctx1 = this.canvasL[1].ctx;
      ctx1.fillRect(25, 25, 100, 100);
      ctx1.clearRect(45, 45, 60, 60);
      ctx1.strokeRect(50, 50, 50, 50);
      
    } else {
      console.log("canvas-unsupported code here");
    }
  },
  methods: {
    getCanvas(canvasRef) {
      return { canvas: canvasRef, ctx: canvasRef.getContext("2d") };
    },
  },
};
</script>

<style>
canvas {
  border: 1px solid #000;
}
</style>