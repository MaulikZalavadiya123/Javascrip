function clk1() {
  function printData(data) {
  document.getElementById("userlist").innerHTML = data;
}

    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET","http://localhost:1111/userlist");
        xmlhttp.send();
        
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var userArray = JSON.parse(this.responseText); // json to array

            console.log(userArray);
            var data = "";
            userArray.forEach((user, index)=>{
              data += "<div class='myuser'>";
              data += "<p>" + user.id + "</p>";
              data += "<p>" + user.name + "</p>";
              data += "</div>";
            })
            printData(data);
          }
        };
}

function clk2() {
  function printData(data) {
  document.getElementById("booklist").innerHTML = data;
}

    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET","http://localhost:2222/booklist");
        xmlhttp.send();
        
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var bookArray = JSON.parse(this.responseText); // json to array

            console.log(bookArray);
            var data = "";
            bookArray.forEach((book, index)=>{
              data += "<div class='myuser'>";
              data += "<p>" + book.id + "</p>";
              data += "<p>" + book.name + "</p>";
              data += "</div>";
            })
            printData(data);
          }
        };
}

function clk3() {
  function printData(data) {
  document.getElementById("companylist").innerHTML = data;
}

    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET","http://localhost:3333/companylist");
        xmlhttp.send();
        
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var companyArray = JSON.parse(this.responseText); // json to array

            console.log(companyArray);
            var data = "";
            companyArray.forEach((company, index)=>{
              data += "<div class='myuser'>";
              data += "<p>" + company.id + "</p>";
              data += "<p>" + company.name + "</p>";
              data += "</div>";
            })
            printData(data);
          }
        };
}

function clk4() {
  function printData(data) {
  document.getElementById("employeelist").innerHTML = data;
}

    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET","http://localhost:4444/employeelist");
        xmlhttp.send();
        
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var employeeArray = JSON.parse(this.responseText); // json to array

            console.log(employeeArray);
            var data = "";
            employeeArray.forEach((employee, index)=>{
              data += "<div class='myuser'>";
              data += "<p>" + employee.id + "</p>";
              data += "<p>" + employee.name + "</p>";
              data += "</div>";
            })
            printData(data);
          }
        };
}