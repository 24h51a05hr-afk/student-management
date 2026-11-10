document.getElementById("regForm").onsubmit = function(event) {
    event.preventDefault();

    let studentname = document.getElementById("studentname").value;
    let rollno = document.getElementById("rollno").value;
    let section = document.getElementById("section").value;


    document.getElementById("result").innerHTML =
        "Registration Successful!<br>" +
        "Student Name: " + studentname + "<br>" +
        "Roll No: " + rollno + "<br>" +
        "Section: " + section + "<br>";
};

document.getElementById("regForm").onreset = function() {
    document.getElementById("result").innerHTML = "";
};