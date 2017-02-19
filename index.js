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

// let in for loops

function letInForLoop(){
    for( var  i = 0; i<= 20;i++){
        setTimeout(function(){
            console.log("Var Example"+i);
            
        },1000);
    };
      for( let  j = 0; j<= 20;j++){
        setTimeout(function(){
            console.log("Let Example"+j);
            
        },1000);
    }cd
}
letInForLoop();
