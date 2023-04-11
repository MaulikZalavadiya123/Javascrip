/*
    while loop syntax
    init;
    while( condition )
    {
        statement;
        ++/--
    }
*/

var i=1;
while(i<=10){
    console.log("The While Say : ", i);
    i++;
}

console.log("----Descending Order Loop----");
var i=10;
while(i>=1){
    console.log("The Loop Say : ", i);
    i--;
}

console.log("----What is value of i after finishing of loop----");
console.log(i);