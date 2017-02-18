'use strict';
// Example On Let Keyword
function letMethod(){
    var a =  2;
    var b = 3;
    if(a === 2){
        var a = 10;
        let b = 20;
        console.log(a);
        console.log(b);
    }
    console.log(a)
    console.log(b);
};
letMethod();