//var ball;

// function calls
//ball = create();

//size(ball,200,200);

//color(ball,255,0,0);

//move(ball,50,50);

// // loop excercise
//var counter = 0;
//while (counter < 10000){
    //create();
    //counter++;
//}

// // arrays excercise
var list = [];
list.push(create());
list.push(create());
list.push(create());
list.push(create());

// change color of balls in array
var i=0;
var length = list.length;
console.log(length)
 while (i < length) {
     var ball = list[i];
     colorRandom(ball);
     i++;
}