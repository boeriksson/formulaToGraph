// Handles physical representation of graph - painting
const width = 800;
const height = 600;

let canvas;
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

function showScale(i, range) {
  const gap = Math.ceil(range/10);
  return (i/gap) % 1 === 0;
}

export function decorateYAxis({ top, bottom }, yStart) {
  ctx.font = '9px serif';
  const yRange = Math.abs(top) + Math.abs(bottom);
  const ySeg = height/yRange;
  for (let i = 1; i < yRange; i++) {
    if (!showScale(i, yRange)) continue;
    ctx.moveTo(yStart - 2, i * ySeg);
    ctx.lineTo(yStart + 5, i * ySeg);

    const text = `${top - i}`;
    let preMinus = '';
    if (i > top) {
      preMinus = '-';
    }
    if (i !== top) {
      ctx.strokeText(`${preMinus}${text}`, yStart + 10, i * ySeg + 3);
    }
  }
}

export function decorateXAxis({ left, right }, xStart) {
  ctx.font = '9px serif';
  const xRange = Math.abs(left) + Math.abs(right);
  const xSeg = width/xRange;
  for (let i = 1; i < xRange; i++) {
    if (!showScale(i, xRange)) continue;
    ctx.moveTo(i * xSeg, xStart - 5);
    ctx.lineTo(i * xSeg, xStart + 2);
    let preMinus = '';

    console.log('i: %s, left: %s', i, Math.abs(left));
    if (i < Math.abs(left)) {
      preMinus = '-';
    }
    const text = `${preMinus}${i - Math.abs(left)}`;
    const tWidth = ctx.measureText(text).width

    if (i !== Math.abs(left)) {
      ctx.strokeText(`${text}`, i * xSeg - tWidth/2, xStart - 10);
    }
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

  decorateYAxis(graphRange, yStart);
  decorateXAxis(graphRange, xStart);
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
