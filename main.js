// String (textos)
// Number (números)
// Boolean (true/false)

window.addEventListener('scroll', onScroll)

var navigation = document.getElementById('navigation')

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    
    // sessão ativa
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
    // sessão ativa
}   

// sessão ativa
function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY+innerHeight/2
    
    // verificar se a sessão passou da linha
    // dados necessários
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionEndAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine
    
    // topo da sessão chegou ou ultrapassou a linha alto
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // limites da sessão
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    // criação de variável
    const sectionId = section.getAttribute('id')

    // endereçar alvo da classe
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }
    
}
// sessão ativa


function showNavOnScroll() {
    if (scrollY > 0) {
    navigation.classList.add('scroll')
    } else {
    navigation.classList.remove('scroll')
    } 
}  

function showBackToTopButtonOnScroll() {
    if (scrollY > 900) {
    backToTopButton.classList.add('show')
    } else {
    backToTopButton.classList.remove('show')
    } 
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 800,

}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header, 
#services .card,
#about h4,
#about h2,
#about p,
#about img`);


