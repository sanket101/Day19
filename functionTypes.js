//one way to call function : function expression
var greet = function(message){
    console.log(message);
}

greet("Hello World!");

//second way of calling function : named function
add(4,5);
function add(a, b){
    console.log('The sum is ' + (a+b));
}

var index = 10;

//no compile or runtime error : only behavior changes
//var index = "hello";

for(var i=0; i < index; i++){
    console.log('The value is ' + i);
}

//Value leaks out of for loop
console.log('The value of i outside loop : ' + i);

