var no = document.querySelectorAll(".drum").length;

for (var i = 0; i < no; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
       var btnhtml =this.innerHTML;
       buttonani(btnhtml);

       switch(btnhtml){

        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            // console.log(btnhtml);
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;


        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;


        case "k":
            var kick=new Audio("sounds/tom-2.mp3");
            kick.play();
        break;

        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;



        default:console.log("man");

       

}});

}
document.addEventListener("keydown",function(event){
 var pressed= event.key;
    console.log(pressed);
    buttonani(pressed);
    switch(pressed){

        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            // console.log(btnhtml);
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;


        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;


        case "k":
            var kick=new Audio("sounds/tom-2.mp3");
            kick.play();
        break;

        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;



        default:console.log("man");

       

}
})

function buttonani(currentkey){
    var active = document.querySelector("."+currentkey);
    active.classList.add("pressed");
 
    setTimeout(function () {
        active.classList.remove("pressed");
    },150);
    }




            

    
