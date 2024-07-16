let drop =document.querySelector('.hamburger')
let nav =document.querySelector('.drop-down')
drop.addEventListener('click',down)
function down(){
    nav.classList.toggle('drop-down')
}
