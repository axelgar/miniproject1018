'use strict'

function Game() {
  self = this;

  self.width = 700;
  self.height = 700;
}

Game.prototype.draw = function() {
  self = this

  var canvasElement = document.querySelector('canvas');
  var ctx = canvasElement.getContext('2d');

  canvasElement.width = self.width;
  canvasElement.height = self.height;

  ctx.fillStyle = 'balck';
  ctx.fillRect(0, 0, canvasElement.width,canvasElement.height);

  var balls = [];

  document.body.addEventListener('mousemove', function(event){
    console.log(event)
    var ball = new Ball(canvasElement, event.x, event.y)
    balls.push(ball)
    ball.draw();
  })
}