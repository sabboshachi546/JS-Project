const couterEl = document.querySelectorAll(".counter");

couterEl.forEach((couterEl)=>{
    couterEl.innerText = "0";
    incrementCounter();
    function incrementCounter(){
       let counterNum = +couterEl.innerText;
        const dataCeil = couterEl.getAttribute("data-ceil");
        console.log(dataCeil);
        const increment = dataCeil / 15;
        counterNum = Math.ceil(counterNum + increment);
        if(counterNum < dataCeil){
            couterEl.innerText = counterNum;
            setTimeout(incrementCounter,50)
        }else{
            couterEl.innerText = dataCeil;
        }
    }
})