//위로 script
const fixedTop = document.querySelector('.to_top');
//console.log(fixedTop);
fixedTop.style.display = 'none';
window.addEventListener('scroll',function(){
    if(this.window.scrollY >= 1000) fixedTop.style.display = 'block';
    else fixedTop.style.display = 'none';
})

//header
//띠 배너
const noticeBnr = document.querySelector('.notice_bnr');
//console.log(noticeBnr);

const noticeSlide = new Swiper(noticeBnr,{
    loop:true,
    direction: 'vertical',
    slidesPerView: 1,
    autoplay:{
        delay: 2500,
    },
    speed: 500,
})

//위로가기 버튼
const toTop = document.querySelector('.to_top');
//console.log(toTop);
toTop.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,0);
})

//사이드메뉴
//햄버거 메뉴 클릭 시 사이드메뉴 나타나기
const sideMenuOpen = document.querySelector('.menu_btn');
const sideMenuBg = document.querySelector('.side_menu_bg');
const sideMenuClose = document.querySelector('.side_close');
const sideMenuOutside = document.querySelector('.side_menu_outside');
const body = document.body;
//console.log(sideMenuOpen,sideMenuBg,sideMenuClose,sideMenuOutside,body);

//햄버거 메뉴 클릭->열기
sideMenuOpen.addEventListener('click',function(e){
    e.preventDefault();
    sideMenuBg.classList.add('active');
    body.classList.add('scroll_lock'); // 스크롤 막기
})
//햄버거 메뉴 클릭->닫기
sideMenuClose.addEventListener('click',function(e){
    e.preventDefault();
    sideMenuBg.classList.remove('active');
    body.classList.remove('scroll_lock'); // 스크롤 복구

    for(let i of sideLnb){ //열린 lnb 초기화
        i.style.height = '0px';
    }
    for(let i of sideGnb){ //화살표 애니메이션 초기화
        i.parentNode.classList.remove('open');
    }
})
//밖 영역 클릭 -> 닫기
sideMenuOutside.addEventListener('click',function(e){
    e.preventDefault();
    sideMenuBg.classList.remove('active');
    body.classList.remove('scroll_lock'); // 스크롤 복구
    for(let i of sideLnb){ //열린 lnb 초기화
        i.style.height = '0px';
    }
    for(let i of sideGnb){ //화살표 애니메이션 초기화
        i.parentNode.classList.remove('open');
    }
})

//사이드메뉴의 gnb 클릭시 lnb 보이기
const sideGnb = document.querySelectorAll('.side_gnb .has_sub > a');/* 의류,신발,용품(제목) */
const sideLnb = document.querySelectorAll('.side_lnb');

//console.log(sideGnb, sideLnb);

for(let i of sideLnb){i.style.transition = 'height 0.3s';}

for(let i of sideGnb){
    let gnbShowHide = false; //초기값(숨김)
    i.addEventListener('click', function(e){
        e.preventDefault();
        //console.log('클릭확인');
        //console.log(i.parentNode.children[1].scrollHeight);
        //a의 부모의 첫번째 자식
        if ( gnbShowHide == false ) {
            i.parentNode.children[1].style.height = `${i.parentNode.children[1].scrollHeight}px`;
            i.parentNode.classList.add('open');
            
        } else {
            i.parentNode.children[1].style.height = 0;
            i.parentNode.classList.remove('open');
        }
        gnbShowHide = !gnbShowHide;
    })
}