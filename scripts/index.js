/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */
//=============================================================== 1. 히어로 배너
const heroBnr = document.querySelector('.hero_bnr');
//console.log(heroBnr);

const heroSlide = new Swiper(heroBnr,{
    loop:true,
    autoplay:{
        delay:3000,
    },
    speed: 1000,
    navigation:{
        prevEl:'.hero_bnr .hero-prev',
        nextEl:'.hero_bnr .hero-next',
    },
    pagination:{
        el:'.hero_bnr .hero-pagination',
        type:'fraction',
        renderFraction:function(current, total){
            return `
                <span class="${current}"></span>
                <span class="custom-separator"></span>
                <span class="${total}"></span>
            `;
        },
        formatFractionCurrent: function (num) {
            return ('0' + num).slice(-2);
        },
        formatFractionTotal: function (num) {
            return ('0' + num).slice(-2);
        },
    },
})

//=============================================================== 2. 베스트셀러
const best = document.querySelectorAll('.best_wrap .tab_contents .swiper');
const best_title = document.querySelectorAll('.best_wrap .best_tab_menu a');
//console.log(best, best_title);

//베스트셀러 탭메뉴 스와이퍼
const tabMenu = document.querySelector('.best_wrap .tab_swiper');
//console.log(tabMenu);
const tabMenuSwiper = new Swiper(tabMenu,{
    slidesPerView: 'auto',
    spaceBetween: 8,
    freeMode: true,
})

//베스트셀러 swiper
const totalSwiper = new Swiper(best[0], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.total_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.total_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        //모바일 (~700)
        0: {slidesPerView: 1.5,},
        //태블릿 (~1024)
        700: {slidesPerView:3,},
        //PC
        1025: {slidesPerView:5,}
    }
});
const topSwiper = new Swiper(best[1], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.top_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.top_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        //모바일 (~700)
        0: {slidesPerView: 1.5,},
        //태블릿 (~1024)
        700: {slidesPerView:3,},
        //PC
        1025: {slidesPerView:5,}
    }
});
const bottomSwiper = new Swiper(best[2], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
    el: '.bottom_swiper .swiper-pagination',
    type: 'fraction',
    },
    scrollbar: {
    el: '.bottom_swiper .swiper-scrollbar',
    draggable: true,
    },
    breakpoints: {
        //모바일 (~700)
        0: {slidesPerView: 1.5,},
        //태블릿 (~1024)
        700: {slidesPerView:3,},
        //PC
        1025: {slidesPerView:5,}
    }
})
const outerSwiper = new Swiper(best[3], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
    el: '.outer_swiper .swiper-pagination',
    type: 'fraction',
    },
    scrollbar: {
    el: '.outer_swiper .swiper-scrollbar',
    draggable: true,
    },
    breakpoints: {
        //모바일 (~700)
        0: {slidesPerView: 1.5,},
        //태블릿 (~1024)
        700: {slidesPerView:3,},
        //PC
        1025: {slidesPerView:5,}
    }
})
const shoesSwiper = new Swiper(best[4], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
    el: '.shoes_swiper .swiper-pagination',
    type: 'fraction',
    },
    scrollbar: {
    el: '.shoes_swiper .swiper-scrollbar',
    draggable: true,
    },
    breakpoints: {
        //모바일 (~700)
        0: {slidesPerView: 1.5,},
        //태블릿 (~1024)
        700: {slidesPerView:3,},
        //PC
        1025: {slidesPerView:5,}
    }
})
const goodsSwiper = new Swiper(best[5], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
    el: '.goods_swiper .swiper-pagination',
    type: 'fraction',
    },
    scrollbar: {
    el: '.goods_swiper .swiper-scrollbar',
    draggable: true,
    },
    breakpoints: {
        //모바일 (~700)
        0: {slidesPerView: 1.5,},
        //태블릿 (~1024)
        700: {slidesPerView:3,},
        //PC
        1025: {slidesPerView:5,}
    }
})

//베스트셀러 탭메뉴
//초기 상태 (첫번째 탭만 보이기)
best.forEach(function(el, i){
    //첫번째 탭만 보이기(active 추가)
    if (i == 0) {
        el.classList.add('active');
    }
    //나머지는 전부 숨기기(active 제거)
    else {
        el.classList.remove('active');
    }
})
//탭 클릭
best_title.forEach(function(tab, index) {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        //모든 탭 active 제거(초기화)
        best_title.forEach(function(t){
            t.classList.remove('active');
        });
        //클릭한 탭만 active 추가
        tab.classList.add('active');
        //모든 상품 리스트 숨김(active 제거)
        best.forEach(function(swiper) {
            swiper.classList.remove('active');
        });
        //클릭한 카테고리 상품만 보이기(active 추가)
        best[index].classList.add('active');
    });
});

//=============================================================== 3. 롱 슬리브
//---------------------------------------------------------- 룩북 swiper
const sleeveLook = document.querySelector('.look_swiper');
//console.log(sleeveLook);
const sleeveLookSwiper = new Swiper(sleeveLook, {
    loop:true,
    autoplay:{
        delay:3000,
    },
    speed:1000,
    navigation:{
        prevEl:'.sleeve_wrap .sleeve-prev',
        nextEl:'.sleeve_wrap .sleeve-next',
    },
})
//---------------------------------------------------------- 상품 swiper
const sleeveList = document.querySelectorAll('.sleeve_wrap .contents_wrap .swiper');
//console.log(sleeveList);
const stripeSwiper = new Swiper(sleeveList[0],{
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.stripe_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.stripe_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.5,},
    //태블릿 (~1024)
    700: {slidesPerView:3,},
    //PC
    1025: {slidesPerView:3,}
    }
})
const dailySwiper = new Swiper(sleeveList[1],{
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.daily_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.daily_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.5,},
    //태블릿 (~1024)
    700: {slidesPerView:3,},
    //PC
    1025: {slidesPerView:3,}
    }
})
const coolSwiper = new Swiper(sleeveList[2],{
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.cool_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.cool_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.5,},
    //태블릿 (~1024)
    700: {slidesPerView:3,},
    //PC
    1025: {slidesPerView:3,}
    }
})

//탭메뉴 클릭
const sleeveTitle = document.querySelectorAll('.sleeve_wrap .tab_menu a');
//console.log(sleeveTitle);
//초기 상태 (첫번째만 보이기)
sleeveList.forEach(function(el, i){
    if (i == 0) {
        el.classList.add('active');
    }
    else {
        el.classList.remove('active');
    }
})
//탭 클릭
sleeveTitle.forEach(function(tab, index) {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        //탭 active 처리
        sleeveTitle.forEach(function(t){
            t.classList.remove('active');
        });
        tab.classList.add('active');
        //swiper 보여주기
        sleeveList.forEach(function(swiper) {
            swiper.classList.remove('active');
        });
        sleeveList[index].classList.add('active');
    });
});
//=============================================================== 5. 데일리 셋업
const setup = document.querySelector('.setup_swiper');
//console.log(setup);
const setupSwiper = new Swiper(setup, {
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.setup_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.setup_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.2,},
    //태블릿 (~1024)
    700: {slidesPerView:2,},
    //PC
    1025: {slidesPerView:3,}
    }
})
//=============================================================== 6. 베스트 팬츠
//---------------------------------------------------------- 룩북 swiper
const pantsLook = document.querySelector('.pants_contents .look_swiper');
//console.log(pantsLook);
const pantsLookSwiper = new Swiper(pantsLook, {
    loop:true,
    autoplay:{
        delay:3000,
    },
    speed:1000,
    navigation:{
        prevEl:'.pants_wrap .pants-prev',
        nextEl:'.pants_wrap .pants-next',
    },
})
//---------------------------------------------------------- 상품 swiper
const pantsList = document.querySelectorAll('.pants_wrap .tab_contents .swiper');
//console.log(pantsList[0]);
const denimsSwiper = new Swiper(pantsList[0],{
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.denim_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.denim_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.2,},
    //태블릿 (~1024)
    700: {slidesPerView:3,},
    //PC
    1025: {slidesPerView:3,}
    }
})
const swetSwiper = new Swiper(pantsList[1],{
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.swet_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.swet_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.2,},
    //태블릿 (~1024)
    700: {slidesPerView:3,},
    //PC
    1025: {slidesPerView:3,}
    }
})
const wovenSwiper = new Swiper(pantsList[2],{
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.woven_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.woven_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.2,},
    //태블릿 (~1024)
    700: {slidesPerView:3,},
    //PC
    1025: {slidesPerView:3,}
    }
})

//탭메뉴 클릭
const pantsTabTitle = document.querySelectorAll('.pants_wrap .tab_menu a');
//console.log(pantsTabTitle);
//초기 상태 (첫번째만 보이기)
pantsList.forEach(function(el, i){
    if (i == 0) {
        el.classList.add('active');
    }
    else {
        el.classList.remove('active');
    }
})
//탭 클릭
pantsTabTitle.forEach(function(tab, index) {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        //탭 active 처리
        pantsTabTitle.forEach(function(t){
            t.classList.remove('active');
        });
        tab.classList.add('active');
        //swiper 보여주기
        pantsList.forEach(function(swiper) {
            swiper.classList.remove('active');
        });
        pantsList[index].classList.add('active');
    });
});

//---------------------------------------------------------- 타이틀 clone
const pantsTitle = document.querySelector('.pants_wrap .title_box');
const pantsClone = document.querySelector('.pants_wrap .title_clone');
//console.log(pantsTitle, pantsClone);

const pantsTitleClone = pantsTitle.cloneNode(true);
pantsClone.appendChild(pantsTitleClone);

//=============================================================== 7. 러닝
const running = document.querySelector('.run_swiper');
//console.log(running);
const runSwiper = new Swiper(running, {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.run_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.run_swiper .swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
    //모바일 (~700)
    0: {slidesPerView: 1.5,},
    //태블릿 (~1024)
    700: {slidesPerView:3,},
    //PC
    1025: {slidesPerView:5,},
    },
})