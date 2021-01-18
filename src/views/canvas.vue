<template>
  <div class="canvas-page">
    <!-- canvas 是行内的 -->
    <canvas width="150px" height="150px" ref="canvas0"></canvas>
    <canvas width="150px" height="150px" ref="canvas1"></canvas>
    <canvas width="150px" height="150px" ref="canvas2"></canvas>
    <canvas width="150px" height="150px" ref="canvas3"></canvas>
    <canvas width="150px" height="150px" ref="canvas4"></canvas>
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
      // 绘制三角形
      this.drawThurgle(this.$refs.canvas0);
      // 绘制矩形
      this.drawRec(this.$refs.canvas1);
      // 绘制笑脸
      this.drawSmile(this.$refs.canvas2);
      this.drawLineTo(this.$refs.canvas3);
      
    } else {
      console.log("canvas-unsupported code here");
    }
  },
  methods: {
    getCanvas(canvasRef) {
      return { canvas: canvasRef, ctx: canvasRef.getContext("2d") };
    },
    // 绘制矩形
    drawRec(ref) {
      var canvas = ref;
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
      }
    },
    // 画三角形
    drawThurgle(ref) {
      let canvas = ref;
      if (canvas.getContext) {
        let ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
      }
    },
    // 画笑脸
    drawSmile(ref) {
      var canvas = ref;
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
        ctx.stroke();
      }
    },
    drawLineTo(ref) {
      var canvas = ref;
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        // 填充三角形
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // 描边三角形
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
      }
    },
  },
};
</script>

<style>
canvas {
  border: 1px solid #000;
  margin-bottom: 10px;
}
.canvas-page {
  width: 150px;
  display: flex;
  flex-flow: column;
  margin: auto;
}
</style>