//get all the drums
const drums = document.querySelectorAll(".drum")

for(let i=0;i<drums.length;i++){
    //playsound on button click
    drums[i].addEventListener("click",function(){
        const text = this.innerHTML
        playSound(text)
        animateButton(text)
    });

    //play sound on keypress
    drums[i].addEventListener("keypress",function(e){
        playSound(e.key)
        animateButton(e.key)
    });
}

//playsound function
function playSound(key){
    switch(key){
        case "i":
            const tom1 = new Audio("../assets/sounds/tom-1.mp3")
            tom1.play()
            break;
        
        case "c":
            const tom2 = new Audio("../assets/sounds/tom-2.mp3")
            tom2.play()
            break;
        case "h":
            const tom3 = new Audio("../assets/sounds/tom-3.mp3")
            tom3.play()
            break;
        case "a":
            const tom4 = new Audio("../assets/sounds/tom-4.mp3")
            tom4.play()
            break;
        case "m":
            const crash = new Audio("../assets/sounds/crash.mp3")
            crash.play()
            break;
        case "b":
            const snare = new Audio("../assets/sounds/snare.mp3")
            snare.play()
            break;
        case "r":
            const bass = new Audio("../assets/sounds/kick-bass.mp3")
            bass.play()
            break;
        default:
            console.log("invalid")
            break;
    }
}

//animate the pressed/clicked button
function animateButton(key){
    const activeButton = document.querySelector("."+key)
    activeButton.classList.add("pressed")
    setTimeout(()=>{
        activeButton.classList.remove("pressed")
    },100)
}