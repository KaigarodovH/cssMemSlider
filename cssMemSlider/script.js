let sliders = document.querySelectorAll(".sliders-track__img");
let slidersContainer = document.querySelector(".slides-track");
let sliderWrappers = document.querySelectorAll(".slide-wrapper");

let discriptions = document.querySelectorAll(".sliders-track__discript");
let bullets = document.querySelectorAll(".bullets__item");

let discriptionTrack = document.querySelector(".discriptions-track");

let currActiveIndex = 0;

bullets.forEach(
    (el,idx)=> el.addEventListener('click',()=>{
        activeSlide(idx);
    }))
/*
sliders.forEach(
    (el)=> el.addEventListener('transitionend',(el)=>{
        if(el.target.classList.contains("img_prev")){
            el.target.classList.remove("img_prev");
            sliders[currActiveIndex].classList.add("img_open");
        }
    }))


*/
activeSlide(currActiveIndex);

function activeSlide(index){
    sliders[currActiveIndex].classList.remove("img_active");
    //sliders[currActiveIndex].classList.remove("img_open");
    
    discriptions[currActiveIndex].classList.remove("discript_active");
    bullets[currActiveIndex].classList.remove("bullet_active");


    sliders[index].classList.add("img_active");

    discriptions[index].classList.add("discript_active");
    bullets[index].classList.add("bullet_active");

    slidersContainer.style.transform =  `translateX(${-index*sliderWrappers[index].clientWidth}px)`
    discriptionTrack.style.transform = `translateX(${-index*discriptions[index].clientWidth}px)`

    currActiveIndex = index;


}