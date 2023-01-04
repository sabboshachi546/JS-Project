const containerEl = document.querySelector(".container");
window.addEventListener("mousemove", (event)=>{
    containerEl.innerHTML =` <div class="mouse-event">
   
    <h4>Mouse X Position (px)</h4>
    ${event.clientX}
</div>
<div class="mouse-event">
    
    <h4>Mouse Y Position (px)</h4>
    ${event.clientY}
</div>`
})