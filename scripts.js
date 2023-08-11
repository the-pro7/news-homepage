let menuBtn = document.querySelector('.menu-btn')
console.log(menuBtn)
let nav = document.querySelector('.nav_list')
console.log(nav)
let closeBtn = document.querySelector('.close')
console.log(closeBtn)

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
    console.log(nav.classList)
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active')
})