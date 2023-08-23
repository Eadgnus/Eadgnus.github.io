// function openClose() {
//     if(document.getElementById('navbar__menu').style.display ===     'block') {
//         document.getElementById('navbar__menu').style.display = 'none';
//     } else {
//         document.getElementById('navbar__menu').style.display = 'block';
//     }
// }


// 실행했을 때 아이디로 요소를 가져와서 style에 display가 block 이라면
// none으로 바꿔준다 
// 아니면 block으로 바꿔준다.




/* 토글버튼 시작 */
const btn = document.getElementById('navbar__toggle-btn'); // 토글버튼의 아이디로 요소를 선택
const box = document.getElementById('navbar__menu'); // 동일

btn.addEventListener('click', () => {
    //btn에 이벤트 리스너를 add하는 addEventListener를 사용하여 click속성을주고화살표함수로 
    //메뉴에 클래스리스트 토글로 act Css를 on off함
    box.classList.toggle('act');
})
/* 토글버튼 끝  */


// 메뉴 네비바에서 선택한 메뉴에 테두리 속성 유지시키고 나머지 메뉴에서 삭제하기
const navMenus = document.querySelectorAll('.navbar__menu__item');
navMenus.forEach(menu => {
    menu.addEventListener('click', () => {
        navMenus.forEach(m => m.classList.remove('active'));
        menu.classList.add('active');
    });
});

// 카테고리 버튼에서 위에랑 마찬가지
const category__menu = document.querySelectorAll('.category__btn');
category__menu.forEach(menu => {
    menu.addEventListener('click', () => {
        category__menu.forEach(m => m.classList.remove('selected'));
        menu.classList.add('selected');
    });
});

// 스크롤 따라서 메뉴버튼 활성화 시키기

// const target = document.getElementById('target'); // 요소의 id 값이 target이라 가정
// const clientRect = target.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
// const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.

window.addEventListener('scroll', function () {
    const posY = this.window.pageYOffset;
    const home = this.document.querySelector('#home').getBoundingClientRect().top;
    const about = this.document.querySelector('#about').getBoundingClientRect().top;
    const skills = this.document.querySelector('#skills').getBoundingClientRect().top;
    const work = this.document.querySelector('#work').getBoundingClientRect().top;
    const testimonials = this.document.querySelector('#testimonials').getBoundingClientRect().top;
    const contact = this.document.querySelector('#contact').getBoundingClientRect().top;
    const footer = this.document.querySelector('#footer').getBoundingClientRect().top;


    const homeTop = posY + home;
    const aboutTop = posY + about;
    const skillsTop = posY + skills;
    const workTop = posY + work;
    const testimonialsTop = posY + testimonials;
    const contactTop = posY + contact - 500;


    const menus = document.querySelectorAll('.navbar__menu__item');
    const home__menu = document.getElementById('navbar__menu1');
    const about__menu = document.getElementById('navbar__menu2');
    const skills__menu = document.getElementById('navbar__menu3');
    const work__menu = document.getElementById('navbar__menu4');
    const chuchun__menu = document.getElementById('navbar__menu5');
    const contact__menu = document.getElementById('navbar__menu6');

    let totalHeight = document.body.scrollHeight - this.window.innerHeight - 1;

    if (posY >= homeTop && posY < aboutTop) {
        menus.forEach(m => m.classList.remove('active'));
        home__menu.classList.add('active');


    } else if (posY >= aboutTop && posY < skillsTop) {
        menus.forEach(m => m.classList.remove('active'));
        about__menu.classList.add('active');

    } else if (posY >= skillsTop && posY < workTop) {
        menus.forEach(m => m.classList.remove('active'));
        skills__menu.classList.add('active');

    } else if (posY >= workTop && posY < testimonialsTop) {
        menus.forEach(m => m.classList.remove('active'));
        work__menu.classList.add('active');

    } else if (posY >= testimonialsTop && posY < contactTop) {
        menus.forEach(m => m.classList.remove('active'));
        chuchun__menu.classList.add('active');

    } else if (posY >= contactTop && posY <= totalHeight) {
        menus.forEach(m => m.classList.remove('active'));
        contact__menu.classList.add('active');

    } else {

    }
});




//형진
let skillsetTop = document.querySelector(".skillset").getBoundingClientRect().top; // 1841
let skillValues = document.getElementsByClassName("skill__value");
let skillValueSee = null;
window.addEventListener("scroll", () => {
    if (window.scrollY > skillsetTop - 500 & !skillValueSee) {
        for (let i = 0; i < skillValues.length; i++) {
            skillValues[i].classList.toggle('see');
            skillValues[i].style = `width: ${skillValues[i].getAttribute("value")}`;
        }
        skillValueSee = document.querySelectorAll("skill__value.see");
    }
})

//현식
const move = function (e) {
    let choice = e.target.innerText;
    switch (choice) {
        case "Home":
            document.getElementById("home").scrollIntoView({ behavior: "smooth" });
            break;
        case "내 소개":
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            break;
        case "기술":
            document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
            break;
        case "프로젝트":
            document.getElementById("work").scrollIntoView({ behavior: "smooth" });
            break;
        case "추천서":
            document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" });
            break;
        case "연락주세요":
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            break;
        default:
            break;
    }
}
const menu_item = document.getElementsByClassName('navbar__menu__item');
for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].onclick = move;
}

//진영이형
const goTop = document.querySelector(".arrow-up"); // 화살표에 goTop이라는 상수를 정의함
window.addEventListener("scroll", () => { // 윈도우에서 이벤트를 발생시킴, 스크롤을 기준으로
    if (window.scrollY > 500) { // 윈도우의 Y값이 500px이 넘었으면, -1을 적용시키는 그 순간부터는 한번 화살표를 누르면 상시 적용됨
        goTop.classList.add("visible"); // goTop이라는 상수(arrow-up)의 css 추가 기능을 추가 (.arrow-up-"visible")이라는 기능을 추가
    } else {
        goTop.classList.remove("visible"); // 만약 그렇지 않으면 arrow-up의 css 추가 기능을 제거 (.arrow-up-"visible")의 visible 기능을 제거
    }
}); // 일단 Y축으로 500px이 넘어가면 화살표를 보이게 만들어 주었다. 아직 클릭하면 위로 올라가진 않음
goTop.addEventListener("click", () => {  // goTop 요소를 클릭한다면
    const smoothy = () => { // smoothy라는 화살표 함수를 정의
        const locate = document.documentElement.scrollTop; // locate라는 상수를 정의 : y축으로부터 scroll 한 거리(x축은 scrollLeft)
        if (locate > 0) { // locate의 값이 0 초과라면 : (locate 값을 500을 줘버리면 y축의 값이 500에서 멈춰버린다.)
            window.scrollBy(0, -50); // x,y값이고 현재 스크롤 위치에서 y축으로 -50씩 한다는 의미, y 숫자가 -가 점점 크면 올라가는 속도가 빨라지겠죠
            setTimeout(smoothy, 10); // smoothy를 0.1초마다 실행 - 지연(숫자가 커지면 더욱 느려진다)
        }
    };
    smoothy(); // 실행!
});

//승수

const allListener = document.getElementById("category__btn__all");
const frontListener = document.getElementById("category__btn__front");
const backListener = document.getElementById("category__btn__back");
const aiListener = document.getElementById("category__btn__ai");
const crawListener = document.getElementById("category__btn__craw");

frontListener.addEventListener("click", function () {
    front();
});
allListener.addEventListener("click", function () {
    all();
});
backListener.addEventListener("click", function () {
    back();
});

aiListener.addEventListener("click", function () {
    ai();
});

crawListener.addEventListener("click", function () {
    craw();
});

window.onload = function () { // 이름을 재설정 하는 함수
    rename_front();
    rename_back();
    rename_ai();
    rename_craw();
    rename_all();
};

function all() { // All 버튼을 클릭 시 3가지 전체를 보여줌
    // all 버튼 클릭 시 나머지 selected 버튼을 off, all toggle을 ON
    show_ai();
    show_backend();
    show_front();
    show_craw();
    const off = document.querySelector(".selected");
    off.classList.toggle("selected");
    const tog_all = document.querySelector("#category__btn__all");
    tog_all.classList.toggle("selected");
}

function front() { // Front 버튼을 클릭 시 Backend와 AI는 display :none으로 설정, Front만 보임
    // Frontend 버튼 클릭 시 나머지 selected 버튼을 off, frontend toggle을 ON
    del_backend();
    del_ai();
    show_front();
    del_craw();
    const off = document.querySelector(".selected");
    off.classList.toggle("selected");
    const tog_f = document.querySelector("#category__btn__front");
    tog_f.classList.toggle("selected");
}

function back() {// Backend 버튼을 클릭 시 Front와 AI는 display :none으로 설정, Backend만 보임
    // backend 버튼 클릭 시 나머지 selected 버튼을 off, backend toggle을 ON
    del_backend();
    del_front();
    del_ai();
    del_craw();
    show_backend();
    const off = document.querySelector(".selected");
    off.classList.toggle("selected");
    const tog_b = document.querySelector("#category__btn__back");
    tog_b.classList.toggle("selected");
}

function ai() { // AI 버튼을 클릭 시 Backend와 Front는 display :none으로 설정, AI만 보임
    // ai 버튼 클릭 시 나머지 selected 버튼을 off, ai toggle을 ON
    del_backend();
    del_front();
    del_craw();
    show_ai();
    const off = document.querySelector(".selected");
    off.classList.toggle("selected");
    const tog_a = document.querySelector("#category__btn__ai");
    tog_a.classList.toggle("selected");
}

function craw() { // AI 버튼을 클릭 시 Backend와 Front는 display :none으로 설정, AI만 보임
    // ai 버튼 클릭 시 나머지 selected 버튼을 off, ai toggle을 ON
    del_backend();
    del_front();
    del_ai();
    show_craw();
    const off = document.querySelector(".selected");
    off.classList.toggle("selected");
    const tog_craw = document.querySelector("#category__btn__craw");
    tog_craw.classList.toggle("selected");
}

function del_backend() { // Backend의 display를 none값으로 바꿈
    const backend = document.getElementsByClassName('project__b');
    for (let i = 0; i < backend.length; i++) {
        backend[i].style.display = 'none';
    }
}

function del_ai() { // AI의 display를 none값으로 바꿈
    const ai = document.getElementsByClassName('project__a');
    for (let i = 0; i < ai.length; i++) {
        ai[i].style.display = 'none';
    }
}

function del_front() { // Front의 display를 none값으로 바꿈
    const front = document.getElementsByClassName('project__f');
    for (let i = 0; i < front.length; i++) {
        front[i].style.display = 'none';
    }
}

function del_craw() { // Front의 display를 none값으로 바꿈
    const craw = document.getElementsByClassName('project__craw');
    for (let i = 0; i < craw.length; i++) {
        craw[i].style.display = 'none';
    }
}

function show_backend() { // Backend의 display를 flex값으로 바꿈
    const front = document.getElementsByClassName('project__b');
    for (let i = 0; i < front.length; i++) {
        front[i].style.display = 'flex';
    }
}

function show_craw() { // AI의 display를 flex값으로 바꿈
    const craw = document.getElementsByClassName('project__craw');
    for (let i = 0; i < craw.length; i++) {
        craw[i].style.display = 'flex';
    }
}

function show_ai() { // AI의 display를 flex값으로 바꿈
    const ai = document.getElementsByClassName('project__a');
    for (let i = 0; i < ai.length; i++) {
        ai[i].style.display = 'flex';
    }
}

function show_front() { // Front의 display를 flex값으로 바꿈
    const backend = document.getElementsByClassName('project__f');
    for (let i = 0; i < backend.length; i++) {
        backend[i].style.display = 'flex';
    }

}

function count_num_front() { // Front의 갯수를 셈
    const cfront = document.getElementsByClassName('project__f').length;
    return cfront;
}

function count_num_back() { // Backend의 갯수를 셈
    const cback = document.getElementsByClassName('project__b').length;
    return cback;
}

function count_num_ai() { // AI의 갯수를 셈
    const cai = document.getElementsByClassName('project__a').length;
    return cai;
}

function count_num_craw() { // AI의 갯수를 셈
    const ccrw = document.getElementsByClassName('project__craw').length;
    return ccrw;
}

function count_num_all() { // All의 갯수를 셈
    let res1 = count_num_front();
    let res2 = count_num_back();
    let res3 = count_num_ai();
    let res4 = count_num_craw();
    res = res1 + res2 + res3 + res4;
    return res;
}

function rename_front() { //count_num_front() 함수를 적용
    const refront = document.getElementById('category__count__f');
    refront.innerText = count_num_front();
}

function rename_back() { //back_num_front() 함수를 적용
    const reback = document.getElementById('category__count__b');
    reback.innerText = count_num_back();
}

function rename_ai() { //ai_num_front() 함수를 적용
    const reai = document.getElementById('category__count__a');
    reai.innerText = count_num_ai();
}

function rename_craw() { //ai_num_front() 함수를 적용
    const recraw = document.getElementById('category__count__craw');
    recraw.innerText = count_num_craw();
}

function rename_all() { // all_num_front() 함수를 적용
    const reall = document.getElementById('category__count');
    reall.innerText = count_num_all();
}

let tog = document.querySelector('#category__btn__all')
const clicked = "clicked"

function handleClick() {
    tog.classList.toggle(clicked);
}


