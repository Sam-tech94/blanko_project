const _name = document.getElementById("name"),
    lastName = document.getElementById("lastname"),
    userName = document.getElementById("username"),
    password = document.getElementById("password"),
    confirmPassword = document.getElementById("confirm_password"),
    checkBox = document.getElementById("remember-me"),
   
    click = document.getElementById("click");
 

let arr = [];

class Content {
    constructor(name, lastName, userName, password, confirmPassword) {
        this.name = name;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}

function clearInputs() {
    _name.value = "";
    lastName.value = "";
    userName.value = "";
    password.value = "";
    confirmPassword.value = "";
}

function add(e) {
    e.preventDefault()
    if (password.value === confirmPassword.value) {
        const obj = new Content(_name.value,lastName.value, userName.value, password.value, confirmPassword.value)
        arr.push(obj)
        localStorage.setItem("key", JSON.stringify(arr))
        clearInputs()
    } else {
        console.log("Password not matched")
    }
}

click.addEventListener("click",add)






    
