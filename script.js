let iicon  = document.getElementById('eyeicon');
let password  = document.getElementById('password');
var msg = document.getElementById('text');
var str = document.getElementById('streght');


password.addEventListener('input',()=>{
   if (password.value.length>0) {
       msg.style.display="block";
       
    //   str.innerHTML="";
   } else {
     msg.style.display="none";
    //  password.style.border="none";
   } if (password.value.length<4) {
      str.innerHTML="weak";
      msg.style.color = "red";
      password.style.borderColor = "red";
   } else if (password.value.length>4  && password.value.length<8) {
        str.innerHTML="Medium";
         msg.style.color = "yellow";
         password.style.borderColor = "yellow";
   } else if (password.value.length>8 && password.value.includes("@","!")) {
     str.innerHTML="Strong";
      msg.style.color = "green";
      password.style.borderColor = "green";
   }
})


iicon.onclick = function () {
    if (password.type == "password" ) {
        password.type  = "text";
        iicon.src="eye-open.png";
        // console.log("not vald");
    } else {
        password.type  = "password";
        iicon.src="eye-close.png";
    }
}