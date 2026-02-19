let iicon  = document.getElementById('eyeicon');
let password  = document.getElementById('password');
var msg = document.getElementById('text');
var str = document.getElementById('streght');
const uppercase = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";
const lowercase = "abcdefghijklmnopqrstvuwxyz";
const number = "0123456789";
const specsym = "@!#$%^&*+";
const lengthva = 12;
const allchar = lowercase + uppercase + number + specsym;

function createpassword() {
    let genpass = "";
    genpass += uppercase[Math.floor(Math.random() * uppercase.length)];
    genpass += lowercase[Math.floor(Math.random() * lowercase.length)];
    genpass += number[Math.floor(Math.random() * number.length)];
    genpass += specsym[Math.floor(Math.random() * specsym.length)];

    while (lengthva > genpass.length ) {
        genpass += allchar[Math.floor(Math.random() * allchar.length)];
     
    }
     str.innerHTML="Strong";
     msg.style.display="block"
      msg.style.color = "green";
      password.style.borderColor = "green";
    password.value = genpass;
}


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
   } else if (password.value.length>4  && password.value.length<8 ) {
        str.innerHTML="Medium";
         msg.style.color = "yellow";
         password.style.borderColor = "yellow";
   } else if (password.value.length>8) {
    //  str.innerHTML="Strong";
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

