// 3. 하단 페이지 클릭 활성화/비활성화 js
const pageNumber = document.querySelectorAll('.page_wrap .page a');
//console.log(pageNumber);

for (let i of pageNumber) {
    i.addEventListener('click',function(e){
        e.preventDefault();
        for (let p of pageNumber){
            p.classList.remove('active');
        }
        this.classList.add('active');
    });
}

// 필터버튼 클릭 시 필터메뉴 보기
const filterBtn = document.querySelector('.filter_btn');
const filterWrap = document.querySelector('.filter_wrap');
const filterBg = document.querySelector('.filter_bg');
const closeBtn = document.querySelector('.filter_close');
//const body = document.body; common js 이미 선언함

//console.log(filterBtn,filterWrap,filterBg,closeBtn,body);

//필터 보기
filterBtn.addEventListener('click',function(e){
    e.preventDefault();
    //console.log('클릭확인');
    filterWrap.classList.add('active');
    //바디 스크롤 막기
    body.classList.add('scroll_lock');
})

//필터 닫기 함수
function closeFilter(){
    filterWrap.classList.remove('active');
    body.classList.remove('scroll_lock');
}

//배경 클릭 -> 닫기
filterBg.addEventListener('click',closeFilter);
//X 버튼 클릭 -> 닫기
closeBtn.addEventListener('click',closeFilter);