
    var item = ["Laptop", "Mouse", "Keyboard", "Water", "Bottle", "Internet"];
    console.log("The Total Elements : ", item.length);

    item.map((value, position) =>{
        console.log("The index : ", position , " Data is : ", value);
    })

    console.log("Array in reverse order");
    item.reverse().map((name, index)=>{
        console.log("The index is : ", index , " The Value is : ", name);
    })

    console.log("----------only Value if array----------");
    item.map((name, index)=>{
        console.log(name);
        console.log("--------------");
    })

    console.log("-------map() without index---------");
    item.map(itemname =>{
        console.log(itemname);
        console.log("..............");

    })

    console.log("-------Using forEach()---------");

    item.forEach((name, index)=>{
        console.log(name , "------------" , name);
    })