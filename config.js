var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};

var DIRECTION = {
  x : 1,
  y : -1,
  r : 1,
  g : 1,
  b : 1
};
var DIMENSIONS = {
  width : 50,
  height : 50,
  x : 400,
  y : 150,
  r : 0,
  g : 100,
  b : 200
};
