// Handles physical representation of graph - painting
const width = 800;
const height = 600;

let ctx;

export function initCtx(newCtx) {
  if (newCtx) {
    ctx = newCtx;
  } else {
    canvas = document.getElementById('graphCanvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
  }
}

function getYStart({ left, right}) {
  return Math.abs(left/right) * width/2;
}
function getXStart({ top, bottom }) {
  return Math.abs(top/bottom) * height/2;
}

export function decorateYAxis({ left, right, top, bottom }, xStart) {
  const yRange = Math.abs(top) + Math.abs(bottom);
  const ySeg = height/yRange;
  console.log('yRange: ', yRange);
  console.log('ySeg: ', ySeg);
  for (let i = 1; i < yRange; i++) {
    console.log(i * ySeg);
    ctx.moveTo(xStart - 10, i * ySeg);
    ctx.lineTo(xStart + 20, i * ySeg);
  }
}

function drawAxis(graphRange) {
  const yStart = getYStart(graphRange);
  const xStart = getXStart(graphRange);
  ctx.beginPath();
  ctx.moveTo(yStart, 0);
  ctx.lineTo(yStart, height);
  ctx.moveTo(0, xStart);
  ctx.lineTo(width, xStart);

  decorateYAxis(graphRange, xStart);
}

function initCanvas (graphRange) {
  initCtx();
  drawAxis(graphRange);
  ctx.stroke();
  console.log('ooops');
}

export default {
  initCanvas
}
