const hamburger=document.querySelector(".hamburger");
const bars=document.querySelectorAll(".bars");
const menu=document.querySelector(".menu");
const menu_items=document.querySelectorAll(".menu-items a");

hamburger.addEventListener('click', () =>{
    menu.classList.toggle('fade_out');
    console.log("sachin")
    bars.forEach((bars) =>{
        bars.classList.toggle('active')
    })

})