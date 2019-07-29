//passing a function as argument
let sum = function(a,b){
    return a+b;
}

let sub = function(a,b){
    return a-b;
}

let product = function(a,b){
    return a*b;
}

let calculate = function(a,b, fun){
    return fun(a,b);
}

var concat = function(a, b){
    return a+b;
}

console.log(calculate("hello ", "world", concat));
console.log(calculate(5, 4, sum));

//function returning a function
var returnFunction = function(firstName, lastName){
    return greetFun = function(){
        console.log('Hi !!' + firstName + ' ' + lastName);
    }
    //return greetFun;
}

var result = returnFunction('Vinay', 'Kumar');
console.log(result);
result();