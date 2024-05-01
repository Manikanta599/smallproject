function aboutFun()
{   document.getElementById("home").style.display = "none";
    document.getElementById("contactus").style.display="none";
    document.getElementById("login_Con").style.display="none";
    var about = document.getElementById("about");
    about.style.display = "block";
    
}

function homeFun()
{
    document.getElementById("about").style.display="none";
    document.getElementById("contactus").style.display="none";
    document.getElementById("login_Con").style.display="none";
    console.log("in home fun")
    
    var home=document.getElementById("home").style.display="block"
    
}

var image = [
    "home/media/i1.png",
    "home/media/i2.png",
    "home/media/i3.png",
    "home/media/i4.png",
    "home/media/i5.png"
];

var numberOfImg = image.length;
var imgNumber = 0;
var intervalId; // Variable to store the interval ID

function previousImage() {
    if (imgNumber > 0) {
        imgNumber--;
    } else {
        imgNumber = numberOfImg - 1;
    }
    document.getElementById('slideImage').src = image[imgNumber];
}

function nextImage() {
    if (imgNumber < numberOfImg - 1) {
        imgNumber++;
    } else {
        imgNumber = 0;
    }
    document.getElementById('slideImage').src = image[imgNumber];
}

// Function to start automatic sliding
function startAutoSlide() {
    intervalId = setInterval(nextImage, 3000); // Change the interval time as needed (in milliseconds)
}

// Function to stop automatic sliding
function stopAutoSlide() {
    clearInterval(intervalId);
}

// Start automatic sliding when the page loads
window.onload = startAutoSlide;



function contactFun()
{
    document.getElementById("home").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("login_Con").style.display="none";
    document.getElementById("contactus").style.display="block";

}


function loginFun()
{
    document.getElementById("home").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("contactus").style.display="none"

    document.getElementById("login_Con").style.display="block";
}





