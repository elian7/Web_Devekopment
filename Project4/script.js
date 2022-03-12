var bg1 = true;

setInterval (function(){
if (bg1 === true) {
    document.querySelector("img").setAttribute("src", "assets/background2.jpg");
    } else if (bg1= !bg1) {
        document.querySelector("img").setAttribute("src", "assets/background3.jpg")
    } else {
        document.querySelector("img").setAttribute("src", "assets/background1.jpg")
    }
    bg1= !bg1
}, 3000)