// menu and navbar inside menu
const menuNavbar = document.getElementById('menu-navbar')
document.body.addEventListener('click', function(e){
    // console.log(e.target.parentNode.tagName)
    const tar = e.target
    if(tar.tagName.toLowerCase() !== 'div'){
        menuNavbar.style.display = 'block'
    }
    else if(tar.tagName.toLowerCase() !== 'ul' || tar.parentNode.tagName.toLowerCase() !== 'ul' || tar.parentNode.parentNode.tagName.toLowerCase() !== 'ul'){
        menuNavbar.style.display = 'none'
        
    }
})

const menu = () => {
    menuNavbar.style.display = 'inline-block'
}
// oh yeah