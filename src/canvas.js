// Handles physical representation of graph - painting
const canvas = document.getElementById('graphCanvas');
const width = 800;
const height = 600;

canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext('2d');

function getYStart(graphRange) {
  return Math.abs(graphRange.left/graphRange.right) * width/2;
}
function getXStart(graphRange) {
  return Math.abs(graphRange.top/graphRange.bottom) * height/2;
}

function drawAxis(graphRange) {
  const yStart = getYStart(graphRange);
  const xStart = getXStart(graphRange);
  ctx.beginPath();
  ctx.moveTo(yStart, 0);
  ctx.lineTo(yStart, height);
  ctx.moveTo(0, xStart);
  ctx.lineTo(width, xStart);
}

function initCanvas (graphRange) {
  drawAxis(graphRange);
  ctx.stroke();
  console.log('ooops');
}

export default {
  initCanvas
}
