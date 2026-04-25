//위로 script
const fixedTopDetail = document.querySelector('.to_top_detail');
//console.log(fixedTop);
fixedTopDetail.style.display = 'none';
window.addEventListener('scroll',function(){
    if(this.window.scrollY >= 1000) fixedTopDetail.style.display = 'block';
    else fixedTopDetail.style.display = 'none';
})

//상세페이지 상단 이미지 swiper
const detailSwiper = document.querySelector('.detail_swiper');
//console.log(detailSwiper);

const detailSlide = new Swiper(detailSwiper,{
    loop:true,
    slidesPerView: 1.7,
    spaceBetween: 10,
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.3,},
    //태블릿 (~1024)
    700: {slidesPerView:1.5,},
    //PC
    1025: {slidesPerView:1.7,}
    }
})