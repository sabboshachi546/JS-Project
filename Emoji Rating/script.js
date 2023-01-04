const startEl = document.querySelectorAll('.fas');
const emojiEl = document.querySelectorAll('.far');

const colorArray =["red","orange","green","blue","orange"];
upDateRating(0)

startEl.forEach((startEl, index)=>{
    startEl.addEventListener('click',()=>{
     upDateRating(index);
    })
})
function upDateRating(index){
    startEl.forEach((startEl, idx)=>{
        if(idx < index + 1){
            startEl.classList.add('active')
        }else{
            startEl.classList.remove('active')
        }
    });
    emojiEl.forEach(emojiEl=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color =colorArray[index];
    })
}





  





















