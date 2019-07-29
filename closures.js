let outerFunction = function(fName, lName){
    var firstName = fName;
    var lastName = lName;
    
    console.log('set the value of firstname and last name..');

    var innerFunction = function(msg, firstName = firstName, lastName = lastName){
        fitstName = firstName;
        lastName = lastName;
        console.log(msg + ' ' + firstName + ' ' + lastName);
    }
    return innerFunction;
}

var result = outerFunction('Navin' , 'Kumar');
result("Hi", "John", "Doe");
