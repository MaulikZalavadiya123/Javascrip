
    function one(){
        var a = 100;
        var b = 200;
        var c = a+b;
        console.log(a, b, "The Addition of ", c);
    }

    one();
    one();
    one();

    console.log("--------------");
    function two(a=0, b=0){
        var c = a+b;
        console.log(a, b, "The Addition of ", c);
    }

    two(20, 40);
    two(10, 80);
    two();