/*==================== HEADER MENU SHOW ====================*/
const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});


function mobilemenucloseToggle(){ //remove active mobilemenu when click nav-item
    const mobiletoggleMenu = document.querySelector('header');
    //const mobileitemtoggleMenu = document.querySelector('.mobileitem');
    const minibagtoggleMenu = document.querySelector('.minibagmenu');
    mobiletoggleMenu.classList.remove("active");
    minibagtoggleMenu.classList.remove("active");
    minibagtoggleMenu.style.display = 'block';
    document.body.style.overflow = 'visible';
}


function moblangmenuToggle(){ // mob_lang mobile language menu
    const moblangtoggleMenu = document.querySelector('.moblangmenu');
    moblangtoggleMenu.classList.toggle('active')
}


function minibagmenuToggle(){
    const minibagtoggleMenu = document.querySelector('.minibagmenu');
    minibagtoggleMenu.classList.toggle('active')
}


function minibagmenucloseToggle(){ //remove active minibagmenu when mobile-menu active
    //const minibagtoggleMenu = document.querySelector('.minibagmenu');
    //minibagtoggleMenu.classList.remove("active");

    const minibagtoggleMenu = document.querySelector('.minibagmenu');
    const mobiletoggleMenu = document.querySelector('header');
    
    if(mobiletoggleMenu.classList.contains('active')) {
        minibagtoggleMenu.style.display = 'block';
        minibagtoggleMenu.classList.remove("active");
        document.body.style.overflow = 'visible';
    }
    else {
        minibagtoggleMenu.style.display = 'none';
        document.body.style.overflow = 'hidden';
    }
}

//__________________________________________________________________________________________

function bagmenuToggle(){
    const bagtoggleMenu = document.querySelector('.bagmenu');
    bagtoggleMenu.classList.toggle('active')
}


function langmenuToggle(){
    const toggleMenu = document.querySelector('.langmenu');
    toggleMenu.classList.toggle('active')
}



/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})