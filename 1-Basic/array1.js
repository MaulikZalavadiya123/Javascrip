
    var a = "Apple";
    var b = "Mango";
    var c = "Banana";
    var d = "Orange";
    var e = "grapes";


    var item = ["Apple", "Mango", "Banana", "Orange"];

    /*
        Structure of array

        arrayName[index] =>Element

        item[0]=>Apple
        item[1]=>Mango
        item[2]=>Banana
        item[3]=>Orange
        item[4]=>Grapes
    */

    console.log( item[0] );
    console.log( item[4] );
    console.log( item[ item.length-1] );

    console.log("------using for loop----");
    for(var i=0; i<item.length; i++){
        console.log(i, item[i] );
    }

    console.log("----For Loop in Desc Order----");
    for(var i=item.length-1; i>=0; i--){
        console.log(i , item[i] );
    }

    console.log("----While Loop----");
    var i=0;
    while( i<item.length)
    {
        console.log(item[i]);
        i++;
    }
