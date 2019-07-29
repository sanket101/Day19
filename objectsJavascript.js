var dishes = [
    {
        'id' : 34,
        'name' : 'masala dosa',
        'price' : 40
    },
    {
        'id' : 35,
        'name' : 'idli-vada',
        'price' : 30
    }
]

let printDishName = function(allDishes){
    console.log(' arguments ');
    console.log(arguments);
    for(var index=0; index < allDishes.length; index++){
        //console.log(dishes[index].price);
        console.log(allDishes[index]['name']);
    }
}

printDishName(dishes);
