const menuEl = document.querySelector('.menu');
const menuText = document.querySelector('.menu p');
const socialListsEl = document.querySelector('.social-lists');
const arrowIconEl = document.querySelector('.menu .fa-brands');
const liEls =  document.querySelectorAll(".social-lists li")

menuEl.addEventListener('click',()=>{
   socialListsEl.classList.toggle('hide');
   menuEl.classList.toggle('rotate');
});
liEls.forEach(liEl=>{
    liEl.addEventListener("click",()=>{
        menuText.innerHTML = liEl.innerHTML;
        socialListsEl.classList.add("hide");
        menuEl.classList.toggle('rotate');
    })
})