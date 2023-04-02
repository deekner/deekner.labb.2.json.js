let bg = document.querySelector('#bg-easteregg')
//save id in variable

function changeBackround() { //function to change to a different background
    document.body.style.backgroundImage = "url('/Images/Easter-background.jpg')";
}
//waiting for CLICK
bg.addEventListener("click", changeBackround);