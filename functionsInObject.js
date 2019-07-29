var dish = {
    id:23,
    name:'Pav Bhaji',
    price:45,

    getPrice:function(){
        return this.price;
    },
    getName:function(){
        return this.name;
    }
}

console.log(dish.getName());

//this is bound to global object : window
var fun = function(){
    console.log(this.firstname);
    console.log(this.lastname);
}

//fun();

//this can be defined inside the function as well
var obj = {
    firstname : 'Lohit',
    lastname : 'Kumar'
}

//Call Function
fun.call({firstname:'Hari', lastname:'Kumar'});

//default behaviour
var fun2 = function(companyName = 'Publicis Sapient'){
    console.log(this.firstname + " works for " + companyName);
}

//if you pass argument, then it will be taken in the function
fun2.call(obj, 'TCS');

arr = ['Sapient' , 'Bangalore'];

var fun3 = function(array){
    console.log(this.firstname + " works for " + array[0] + " at location " + array[1]);
}

//Bind Function
var rebindFun = fun3.bind(obj, arr);
rebindFun();

//Apply Function 
var fun4 = function(param1, param2, param3){
    console.log(param1 + param2 + param3);
}

fun4.apply({}, ['one', 'two', 'three']);