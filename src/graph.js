// Handles logical representation of graph
import canvas from './canvas';

function initGraph(range) {
  const graphRange = range || {
    right : 50,
    left : -50,
    top : 50,
    bottom : -50
  };

  canvas.initCanvas(graphRange);
}

export default {
  initGraph
}