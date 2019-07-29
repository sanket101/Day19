var Dish = function(){

    var id = 0;
    var name = '';
    var price = 0;

    //whatever you want to expose obj
    var obj = {
        setId : function(argId){
            id = argId;
        },
        getId : function(){
            return id; 
        },
        setName : function(argName){
            name = argName;
        },
        getName : function(){
            return name; 
        },
        setPrice : function(argPrice){
            price = argPrice;
        },
        getPrice : function(){
            return price; 
        },
        getDish : function(){
            return 'id ' + id + ' name ' + name + ' price ' + price;
        }
    }
    return obj;
}
var result = Dish();
result.setId(2);
result.setName('Vada Pav');
result.setPrice(20);

console.log(result.getDish());

//singleton object
var Dish1 = function(){

    var id = 0;
    var name = '';
    var price = 0;

    //whatever you want to expose obj
    var obj = {
        setId : function(argId){
            id = argId;
        },
        getId : function(){
            return id; 
        },
        setName : function(argName){
            name = argName;
        },
        getName : function(){
            return name; 
        },
        setPrice : function(argPrice){
            price = argPrice;
        },
        getPrice : function(){
            return price; 
        },
        getDish : function(){
            return `id  : ${id} name : ${name} price : ${price}`;
        }
    }
    return obj;
}();

Dish1.setId(1);
Dish1.setName('Paneer 65');
Dish1.setPrice(120);
console.log(Dish1.getDish());