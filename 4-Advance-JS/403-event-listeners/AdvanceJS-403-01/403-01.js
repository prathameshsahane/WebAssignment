const kb = document.querySelector(".keyboard");

kb.addEventListener("keyup",(e)=>{
   let key = document.getElementById("key-text");
   let ans=document.getElementById('ans');
     ans.innerHTML=e.keyCode;
     key.innerHTML = e.key;
});