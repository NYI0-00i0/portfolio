
const row14Cont = document.querySelectorAll('.big_container .row .page_next');
const row14Container = document.querySelector('.big_container .row14 .more_proj')

row14Cont.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        let winWidth= window.innerWidth * 0.64;
        let gap = 46;
        let idx = index + 1;

        row14Container.style.transform = `translateX(-${(winWidth + gap) * idx}px)`

    })
})


const row15Swiper = new Swiper('.row15_imgs.swiper', {
    loop:true,
    autoplay:true,
    slidesPerView: 3,
    spaceBetween:30,
})


