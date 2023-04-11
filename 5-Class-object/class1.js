class Test{
    constructor(){
        this.mobile=9999999999;
        this.email="help@xyz.com";
        this.contactName="Alex";
    }

    home() {
        console.log("Welcome Home");
        console.log("Help Line : ", this.mobile);
        console.log("\n");
    }

    about() {
        console.log("About Us");
        console.log("e-Mail us - ", this.email);
        console.log("Help Line : ", this.mobile);
        console.log("\n");
    }

    contact() {
        console.log("Contact Us");
        console.log("e-Mail us - ", this.email);
        console.log("Help Line : ", this.mobile);
        console.log("Contact Person : ", this.contactName);
        console.log("----------------------------------");
        this.home();
    }
}

var object1 = new Test();
object1.home();
object1.about();
object1.contact();

console.log(object1.mobile);

/*
    class : it is collections of member variable and member method
    member variable : those variables, get defined under constructor using "this" operator
                      the member variables can be used inside and outside of class too.

    member method / function - All the user defined functions of a class is called
                               member function.

    constructor - it is called life cycle function of javascript. it is prdefined function.
                  it use to define member variable of current class.
    this - it is called object of current class.
           it use to call any asstets of a class but inside current class.

    object of a class - it is instance of a class.
                        it use to access the assets of a class.
    extends - it use to inherit the feature of 1 class to other class.
    inheritance - it give feature to inherit one class feature to another class using extends keyword
*/