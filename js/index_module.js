import hamburgerMenu, {pablo as pab} from "./menu_hamburguesa.js"
import {matematica as m} from "./menu_hamburguesa.js"


const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
})

