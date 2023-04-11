class website{
    printdata = (data) =>{
        document.getElementById("container").innerHTML=data;
    }

    home = () =>{
        var data = "<h1> Welcome Home </h1> <p> it is working </p>";
        this.printdata(data);
    }

    about = () =>{
        var data = "<h1> About Us </h1> <p> it is working </p>";
        this.printdata(data);
    }

    contact = () =>{
        var data = "<h1> Contact </h1> <p> it is working </p>";
        this.printdata(data);
    }
}

var object2 = new website();

