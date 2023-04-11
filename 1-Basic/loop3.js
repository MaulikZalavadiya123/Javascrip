
console.log("------Nested Loop------");
var i=1;
while(i<=10){
    console.log(i, "---Outer Loop Say");

    for(var j=1; j<=i; j++){
        console.log(j, " : Inner Loop");
    }

    i++;
    console.log("-----------------------");
}