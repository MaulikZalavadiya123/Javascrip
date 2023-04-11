class Shop{
    constructor(){
        this.item = ["Lux Soap", "Washing Powder", "Rice", "Potato"];
    }

    openShop = () =>{
        var data = "<h1> Hi, Shop is Open Now </h1>";
        this.item.map((name, slno)=>{
            data += "<p>" + slno + "." + name + "</p>";
        });
        data += "<p> Thanks ! Visit Again.... </p>";
        this.printdata(data);
    }

    printdata = (data) =>{
        document.getElementById("container").innerHTML = data;
    }

    closeShop = () =>{
        var msg = "<h1> Shop Will Open 6:Am, Close 9:PM </h1>";
        this.printdata(msg);
    }

    save = () =>{
        var newitem = document.getElementById("newitem").value;
        this.item.unshift(newitem); // to add new element at begning of array
        this.openShop(); // to reload the item list
        document.getElementById("newitem").value="";
        document.getElementById("msg").innerText=newitem + " Added Successfuly !";
    }
}

const object3 = new Shop();