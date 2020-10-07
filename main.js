const $body = document.body
const $html = document.documentElement

const $btnBurger = document.getElementById("burger-btn")
const $wrapperBurger = document.querySelector(".wrapper-burger")

function openMenu () {

 
   

    $wrapperBurger.classList.toggle("wrapper-on")

    if ($wrapperBurger.classList.contains("wrapper-on")){
        $btnBurger.querySelector("img").setAttribute("src", "/assets/icon-close.png")

        console.log("Hola")
    } else {
        $btnBurger.querySelector("img").setAttribute("src","/assets/menu-bar.png")
    }

  

}


$btnBurger.addEventListener("click", (e) => {

    openMenu()
    
})