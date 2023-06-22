'use strict';
// NAV MENU
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const menuLinks = document.querySelector('.menu-links')
const links = document.querySelectorAll('.links li a')

const toggle = ()=>{
  openMenu.classList.toggle('hidden')
  menuLinks.classList.toggle('show')
}

links.forEach(link =>{
  link.addEventListener('click',toggle)
})
document.addEventListener('keydown',(e)=>{
  if(e.key === 'Escape' && !menuLinks.classList.contains('hidden')){
    toggle();
  }
});

openMenu.addEventListener('click',toggle)
closeMenu.addEventListener('click',toggle)


// SWITCH SECTION
const buttonEl = document.querySelector('.switching-button')
const switchbtn = document.querySelectorAll('.switch-btn')
const content = document.querySelectorAll('.content')
buttonEl.addEventListener('click',function(e){
  // e.preventDefault()
  const btn = e.target.closest('.switch-btn')
 console.log(btn);
  if(!btn)return;

  switchbtn.forEach(btn => btn.classList.remove('switch-btn-active'))
  btn.classList.add('switch-btn-active')

  content.forEach(c => c.classList.remove('active-content'))
  console.log(btn.dataset.tab);
  console.log(document.querySelector(`content-${btn.dataset.tab}`));
  document.querySelector(`.content-${btn.dataset.tab}`).classList.add('active-content')
})


// FAQ section
const questBoxes = document.querySelectorAll('.quest-boxes')
questBoxes.forEach(box =>{
  box.addEventListener('click',()=>{
    box.classList.toggle('active')
    
    questBoxes.forEach(boxes =>{
      if(boxes !== box){
        boxes.classList.remove('active');
      }
    });
  });
});

// VALIDATION EMAIL

const form = document.getElementById('form')
const emailInput = document.querySelector('.email-input')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  if(!emailInput.value){
      emailInput.classList.add('error');
      errorMessage.textContent =`Whoops,It can't be empty`;
  }else{
    errorMessage.textContent =``;
    emailInput.classList.remove('error');
    if(!isEmail(emailInput.value)){
      errorMessage.textContent =`Whoops,It's an email`;
      emailInput.classList.add('error');
    }
  }
 
})

////sticky Nav
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const stickyNav = (entries)=>{
const [entry] =entries;
    if(!entry.isIntersecting){
      nav.classList.add('sticky')
    }else{
      nav.classList.remove('sticky')
    }

}
const observer = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0.1,
  rootMargin:'-180px'
})
observer.observe(header)


const fadedSection = (entries)=>{
  entries.forEach(entry =>{
    entry.target.classList.toggle('faded',entry.isIntersecting)
    if(entry.isIntersecting)
    obsreverSec.unobserve(entry.target)
  })
}
const obsreverSec = new IntersectionObserver(fadedSection,{
  root:null,
  threshold:0.2
})
const section  = document.querySelectorAll('section')
section.forEach(sec =>{
  obsreverSec.observe(sec)
})

function isEmail(email) { 
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
} 





