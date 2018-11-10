// Grabbing the header
var header = document.querySelector("h1")
// Then you can interface with the object.

// Interface with the style.
//You will see a ton of options show up!
header.style.color = 'red'

// Now let's connect it to the script to
// change it once every second to a random color!

// Random Color Function:
function getRandomColor(){
    var letters = "0123456789ABCDEF"
    var color = "#"
    for(var i=0; i<6; i++){
        color+= letters[Math.floor(Math.random()*16)]
    }
    return color
}

// Making function to change header color at each call
function changeHeaderColor(){
    var color = getRandomColor()
    header.style.color = color 
}
//Calling it at half a second interval
setInterval("changeHeaderColor()", 1000)