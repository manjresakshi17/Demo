
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // alert("i got click..");

        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        // console.log(this.innerHTML);
        //  
        
        // switch statement
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });

    //detecting keyboard press
}
document.addEventListener("keypress",function(event){
// alert("key was pressed...");
// console.log(event);
makeSound(event.key);
buttonAnimation(event.key);
});
function makeSound(key){
    switch(key){

        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
       
        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("sounds/tom-2.mp3");
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("sounds/tom-2.mp3");
        tom4.play();
        break;

        case "j":
        var snare = new Audio("sounds/tom-2.mp3");
        snare.play();
        break;
        
        case "k":
        var crash = new Audio("sounds/tom-2.mp3");
        crash.play();
        break;

        case "k":
        var kich = new Audio("sounds/tom-2.mp3");
        kich.play();
        break;

        default:
            console.log();



    }

}
function buttonAnimation(currentKey){
    var activeButton  = document.querySelector("." + currentKey);

    activeButton.classList.add("Pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    
    },100);
}


// alert("hello");