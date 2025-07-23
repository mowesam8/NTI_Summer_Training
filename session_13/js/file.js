var usersData = [];
var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var nameValue = e.target[0].value;
    var emailValue = e.target[1].value;
    var user = {
        name: nameValue,
        email: emailValue
    };
    usersData.push(user);
    var divForData = document.createElement("div");
    myForm.appendChild(divForData);
    var p = document.createElement("p");
    p.classList.add("text-black", "p-2", "bg-info");
    p.innerText = "The Name is : " + user.name + "\n" + "The email is : " + user.email;
    divForData.appendChild(p);
    e.target[0].value = "";
    e.target[1].value = "";
    console.log("All users data:", usersData);
});
