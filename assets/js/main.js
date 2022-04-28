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