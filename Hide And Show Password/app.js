let input= document.querySelector("input");
let icon1= document.querySelector("#eye");
function clic(){
    if(input.type=="password"){
        input.type ="text"
        icon1.src ="eye-open.png";
    }else{
        input.type= "password";
        icon1.src= "eye-close.png";
    }
console.log("hello");
}
icon1.addEventListener("click",clic);
