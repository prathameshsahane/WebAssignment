// let drum=document.querySelectorAll('.drum');
for(var i=0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',
    function(){
        var buttontext=this.innerHTML;
        makesound(buttontext);
    })
    document.addEventListener('keypress',
    function(e){
        makesound(e.key);
    })
    function makesound(buttontext){
        if(buttontext=='w'){
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        }
        if(buttontext=='a'){
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        }
        if(buttontext=='s'){
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        }
        if(buttontext=='d'){
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        }
        if(buttontext=='j'){
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        }
        if(buttontext=='k'){
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        }
        if(buttontext=='l'){
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        }
    }
}
