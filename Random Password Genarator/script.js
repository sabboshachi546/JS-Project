const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('.input');
const copyIconEl = document.querySelector('.fa-copy');
const alerContainerEl = document.querySelector('.alert-container')

btnEl.addEventListener('click',()=>{
    inputPasswowrd();
});
copyIconEl.addEventListener('click',()=>{
    copyPass();
    if(inputEl.value){
        alerContainerEl.classList.remove('active');
        setTimeout(()=>{
        alerContainerEl.classList.add('active')
        },2000)
    }
});

function inputPasswowrd(){
    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(){}[]";
    const passwordLen = 10;
    let password = "";
    for (let index = 0; index < passwordLen; index++) {
        const randomPass = Math.floor(Math.random()*char.length);
        password += char.substring(randomPass, randomPass +1);
        
    }
    inputEl.value = password;
    alerContainerEl.innerText = password + " conpied!";
}
function copyPass(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}
