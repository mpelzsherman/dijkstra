import { dijkstra } from './dijkstra'

const graph = {
  start: {A: 5, B: 5},
  A: {C: 5, D: 5},
  B: {A: 5, D: 5},
  C: {D: 5, finish: 5},
  D: {finish: 5},
  finish: {}
};



console.log(dijkstra(graph));
