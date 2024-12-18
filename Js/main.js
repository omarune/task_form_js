// form function
function Donatello(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm =document.getElementById("confirm").value;
    var result = document.getElementById("result"); 


    result.setAttribute("class", "alert alert-dengar text center");
    result.style.backgroundColor = "red";
    result.style.textAlign = "center"
    result.style.color = "#fff";
    result.style.padding = "3px";
    result.style.transition = "0.5s"


    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML ="Enter data in your form";
        return false;
    }else if(user.length<5 || user.length>15){
        result.innerHTML = "enter 5-15 character in your name";
        return false;
    }else if(email.indexOf("@",3) ==-1 || email.indexOf(".com") ==-1){
        result.innerHTML = "Enter valid Email";
        return false;
    }else if(pass.length<8){
        result.innerHTML = "enter password bigger than shit";
        return false;
    }else if (pass != confirm){
        result.innerHTML = "match password";
        return false;
    }else{
        return true;
    }
}
// eye function
// function eyeicon(){
//     var eyeicon = document.getElementById("eyeicon");
//     var password = document.getElementById("pass")
//     if(password.type == "password"){
//         password.type = "text";
//         eyeicon.src = "<i class='fa-solid fa-eye' ></i>"   
// }else{
//     password.type = "password";
//     eyeicon.src = "<i class='fa-regular fa-eye-slash'></i>"
// }
// }