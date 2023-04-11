    // switch case
    var url = "enquiry";
    switch(url){
        case"home":
        console.log("Display Home.html File");
        break;

        case"signup":
        console.log("Display Register.html File");
        break;

        case"login":
        console.log("Display Login.html File");
        break;

        case"contact":
        case"enquiry":
        console.log("Display Contact.html File");
        break;

        default:
            console.log("Display Welcome.html File")
    }