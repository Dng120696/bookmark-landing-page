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
const switchbtn = document.querySelectorAll('.switch-btn')
const imgSwitch = document.querySelector('.img-switch')
const titleSwitch = document.querySelector('.title-switch')
const infoSwitch = document.querySelector('.info-switch')
const btnInfo = document.querySelector('.btn-info')
const info = document.getElementById('info')
const switchItem = [
  {
    id:0,
    title:" Bookmark in one click",
    info:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    btn:"More Info",
    img:'./images/illustration-features-tab-1.svg'
},
  {
    id:1,
    title:"  Intelligent search",
    info:"Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.",
    btn:"More Info",
    img:'./images/illustration-features-tab-2.svg'
},
  {
    id:2,
    title:"  Share your bookmarks",
    info:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    btn:"More Info",
    img:'./images/illustration-features-tab-3.svg'
}
];

switchbtn.forEach((item,i) =>{
  item.addEventListener('click',function(){
    item.classList.toggle('switch-btn-clicked')

    const itemList = switchItem.find(items=> items.id === i);
      const {title,info,btn,img} = itemList;
      titleSwitch.textContent =title ;
      imgSwitch.src = img ;
      infoSwitch.textContent =info ;
      btnInfo.textContent = btn;

    switchbtn.forEach(items =>{
      if(items !== item){
        items.classList.remove('switch-btn-clicked')
      }else{
        items.classList.add('switch-btn-clicked')
      }
    })
  })
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


function isEmail(email) { 
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
} 





