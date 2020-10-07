export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;

    d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}









const sumar = (a,b) => {
    let result = a+b
    console.log(result)
}

const restar = (a,b) => {
    let result = a-b;
    console.log(result)
}

export const pablo = "Pablito"
 
export const matematica = {
    sumar,
    restar
}