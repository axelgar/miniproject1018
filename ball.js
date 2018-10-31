'use strict'

function Ball (canvas, x,y) {
  self = this;

  self.canvas = canvas
  self.x = x;
  self.y = y;
  self.ctx = canvas.getContext('2d');
}

Ball.prototype.draw = function() {
  self = this;

  var color = getRandomColor()
  self.ctx.fillStyle = color;
  self.ctx.arc(self.x, self.y, 10, 0, 2 * Math.PI);
  self.ctx.fill();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}