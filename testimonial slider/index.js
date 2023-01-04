const testimonial =[
    {
        name:"Shuvo Mohanto",
        photoUrl:"IMG_6716.JPG",
        text:"I am so busy.So I have no time tolk to you.Go to heal.I am so happy for me for everything. So don't disdrut me ever."

    },
    {
        name:"Sabbo Mohanto",
        photoUrl:"IMG_6611.JPG",
        text:"i am a student of rangpur polytechnic Institure. I am study Eletronics Deperment on 6th semister. So i hardly try to done my study."
    },
    {
        name:"Arjun Monanto",
        photoUrl:"IMG_6685.JPG",
        text:"You are best .so how ever man try to lost your hope can not give up your life."

    },
    {
        name:"Sidarth Mohanto",
        photoUrl:"IMG_6713.JPG",
        text: "Hoesty is the best policy that is wrong. Becouse today man are so selfish. They have to try use to your benefit her self. So don't belive anyone stay for you."
    }
];
const imgEl = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
let idx = 0;
updateTestimonial();
function updateTestimonial(){
    const{name,photoUrl,text} = testimonial[idx];
    imgEl.src = photoUrl;
    textE1.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx == testimonial.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },5000)
}