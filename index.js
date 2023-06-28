gsap.from("h1", {y:20, duration:1.5, delay:0.5, ease:"bounce"})
gsap.from(".contactH1", {x:1000, delay:0.5, deration:2})
gsap.from(".contactH3", {x:1000, delay:0.5, deration:2})

const clickThisButton = document.querySelectorAll("li");

clickThisButton.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
    removeFocus();
    item.classList.add('scale');
    
})
    removeFocus = () =>{
        clickThisButton.forEach(item=>{
        item.classList.remove('scale');
    })
}
})