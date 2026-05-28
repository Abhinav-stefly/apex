const button = document.getElementById("btn");

button.addEventListener("click", function () {

    let name = document.getElementById("username").value;

    if (name === "") {
        document.getElementById("message").innerHTML =
            "Please enter your name!";
    } else {
        document.getElementById("message").innerHTML =
            "Hello, " + name + " 👋";
    }

});