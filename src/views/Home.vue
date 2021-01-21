<template>
  <div class="home-page">
    <canvas ref="canvas" width="450px" height="600px"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      ball: Object,
      ctx: Object,
    };
  },
  mounted() {
    let canvas = this.$refs.canvas;
    let ctx = this.$refs.canvas.getContext("2d");
    let raf;
    let running = false;
    let ballL = [];
    let ball = {
      x: 100,
      y: 100,
      vx: 5,
      vy: 3,
      radius: 25,
      color: "blue",
    };
    function drawBall() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    ballL.push(ball);
    function clear() {
      // 拖影
      ctx.fillStyle = "rgba(255,255,255)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    function draw() {
      // 拖影效果
      // ctx.fillStyle = "rgba(255,255,255,0.3)";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // 无拖影效果
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      clear();
      // 把一个球都画上
      ballL.forEach((el) => {
        // console.log(el)
        drawBall.apply(el);
        // 控制ball的状态
        if (el.y + el.vy > canvas.height || el.y + el.vy < 0) {
          el.vy = -el.vy;
        }
        if (el.x + el.vx > canvas.width || el.x + el.vx < 0) {
          el.vx = -el.vx;
        }
        el.x += el.vx;
        el.y += el.vy;
      });
      raf = window.requestAnimationFrame(draw);
    }
    canvas.addEventListener("mousemove", function (e) {
      if (!running) {
        ballL.splice(1);
        ball.x = e.offsetX;
        ball.y = e.offsetY;
        clear();
        drawBall.apply(ball);
      }
    });
    canvas.addEventListener("click", function (e) {
      console.log(ballL.length);
      if (!running) {
        running = true;
        raf = window.requestAnimationFrame(draw);
      } else {
        let ball2 = JSON.parse(JSON.stringify(ball));
        ball2.x = e.offsetX;
        ball2.y = e.offsetY;
        ballL.push(ball2);
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      }
    });
    canvas.addEventListener("mouseout", function () {
      window.cancelAnimationFrame(raf);
      running = false;
    });
    drawBall.apply(ball);
  },
};
</script>
<style lang="less">
.home-page {
  canvas {
    border: 1px solid #000;
  }
}
</style>