var length = data.length;
console.log(length)

// you work goes here
// -----------------------
for (var i = 0; i < length; i++) {
var ball = data[i];
create(ball.x,ball.y,ball.color);
}