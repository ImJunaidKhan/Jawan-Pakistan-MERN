
var fullname = document.getElementById("fullname")
var email = document.getElementById("email")
var pswd = document.getElementById("pswd")


function onSignup(){

    if(!fullname.value || !email.value || !pswd.value ) {
        alert("All Information is required")
    }



    var data = {
        fullname:fullname.value,
        email: email.value,
        pswd: pswd.value
    }


    var users = localStorage.getItem("users")
    if(users === null){
        localStorage.setItem("users",JSON.stringify([data]))
        console.log("users nhi hain")
    }
    else{
        var parseData = JSON.parse(users)
        console.log(parseData)

        for (var i = 0; i < parseData.length; i++) {
            var element = parseData[i];

            if (email.value == element.email) {
                alert("Email already registered! 🙃")
                return
            }
            
        }

        parseData.push(data)
        localStorage.setItem("users",JSON.stringify(parseData))
        console.log("users hain")

        
    }

    fullname.value = ""
    email.value = ""
    pswd.value = ""
    

}