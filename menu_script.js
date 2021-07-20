const menu = {
    classDOM: '.burger_menu',
    toggleClass () {
        document.querySelector(this.classDOM).classList.toggle('hidden')
    }
}
document.querySelector ('.icon-3').addEventListener('click', ()=> {
    menu.toggleClass()
})

document.querySelector ('.burger_menu_close').addEventListener('click', ()=> {
    menu.toggleClass()
})
