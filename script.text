//현식 부분 홈, 내소개,기술,작업실, 추천서 ,연락주세요 누르면 스르륵 이동

const allListener = document.getElementById("category__btn__all");
const frontListener = document.getElementById("category__btn__front");
const backListener = document.getElementById("category__btn__back");
const aiListener = document.getElementById("category__btn__ai");

frontListener.addEventListener("click" , function() {
  front();
});
allListener.addEventListener("click", function() {
  all();
});
backListener.addEventListener("click", function() {
  back();
});

aiListener.addEventListener("click", function() {
  ai();
});


function front() {
  del_backend();
  del_ai();
  show_front();
  const off = document.querySelector(".selected");
  off.classList.toggle("selected");
  const tog_f = document.querySelector("#category__btn__front");
  tog_f.classList.toggle("selected");
}

const move = function(e) {
    let choice = e.target.innerText;
    switch (choice) {
        case "홈":
            document.getElementById("home").scrollIntoView({behavior: "smooth"});
            break;
        case "내 소개":
            document.getElementById("about").scrollIntoView({behavior: "smooth"});
            break;
        case "기술":
            document.getElementById("skills").scrollIntoView({behavior: "smooth"});
            break;
        case "내 작업실":
            document.getElementById("work").scrollIntoView({behavior: "smooth"});
            break;
        case "추천서":
            document.getElementById("testimonials").scrollIntoView({behavior: "smooth"});
            break;
        case "연락주세요":
            document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            break;
        default:
            break;
    }
}

const menu_item = document.getElementsByClassName('navbar__menu__item');
for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].onclick = move;
}

//형진 게이지 차는 기능

let skillsetTop = document.querySelector(".skillset").getBoundingClientRect().top; // 1841
let skillValues = document.getElementsByClassName("skill__value");
let skillValueSee = null;
window.addEventListener("scroll", ()  => {
    if (window.scrollY > skillsetTop-500 & !skillValueSee) {
        for (let i = 0; i < skillValues.length; i++) {
            skillValues[i].classList.toggle('see');
            skillValues[i].style = `width: ${skillValues[i].getAttribute("value")}`;
        }
        skillValueSee = document.querySelectorAll("skill__value.see");
    }
})


//진영이형꺼 

const goTop = document.querySelector(".arrow-up"); // 화살표에 goTop이라는 상수를 정의함
window.addEventListener("scroll", () => { // 윈도우에서 이벤트를 발생시킴, 스크롤을 기준으로
    if(window.scrollY > 500) { // 윈도우의 Y값이 500px이 넘었으면, -1을 적용시키는 그 순간부터는 한번 화살표를 누르면 상시 적용됨
        goTop.classList.add("visible"); // goTop이라는 상수(arrow-up)의 css 추가 기능을 추가 (.arrow-up-"visible")이라는 기능을 추가
    } else {goTop.classList.remove("visible"); // 만약 그렇지 않으면 arrow-up의 css 추가 기능을 제거 (.arrow-up-"visible")의 visible 기능을 제거
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

    //성대\
    const btn = document.getElementById('navbar__toggle-btn'); // 토글버튼의 아이디로 요소를 선택
    const box = document.getElementById('navbar__menu'); // 동일
    btn.addEventListener('click', () => {
        //btn에 이벤트 리스너를 add하는 addEventListener를 사용하여 click속성을주고화살표함수로
        //메뉴에 클래스리스트 토글로 act Css를 on off함
        box.classList.toggle('act');
    })

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
        menu.addEventListener('click', () =>{
            category__menu.forEach(m => m.classList.remove('selected'));
            menu.classList.add('selected');
        });
    });


//승수부분

window.onload = function () { // 이름을 재설정 하는 함수
    rename_front();
    rename_back();
    rename_ai();
    rename_all();
};

function all() {
  show_backend();
  show_front();
  const off = document.querySelector(".selected");
  off.classList.toggle("selected");
  const tog_all = document.querySelector("#category__btn__all");
  tog_all.classList.toggle("selected");
};

  
function back() {
    del_backend();
    del_front();
    del_ai();
    show_backend();
    const off = document.querySelector(".selected");
    off.classList.toggle("selected");
    const tog_b = document.querySelector("#category__btn__back");
    tog_b.classList.toggle("selected");
}
  
  function ai() { // AI 버튼을 클릭 시 Backend와 Front는 display :none으로 설정, AI만 보임
                  // ai 버튼 클릭 시 나머지 selected 버튼을 off, ai toggle을 ON
    del_backend();
    del_backend();
    del_front();
    show_ai();
    const off = document.querySelector(".selected");
    off.classList.toggle("selected");
    const tog_a = document.querySelector("#category__btn__ai");
    tog_a.classList.toggle("selected");
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
  
  function show_backend() { // Backend의 display를 flex값으로 바꿈
    const front = document.getElementsByClassName('project__b');
    for (let i = 0; i < front.length; i++) {
      front[i].style.display = 'flex';
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
  
  function count_num_all() { // All의 갯수를 셈
    let res1 = count_num_front();
    let res2 = count_num_back();
    let res3 = count_num_ai();
    const res = res1 + res2 + res3;
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
  
  function rename_all() { // all_num_front() 함수를 적용
    const reall = document.getElementById('category__count');
    reall.innerText = count_num_all();
  }
  
  let tog = document.querySelector('#category__btn__all')
  const clicked = "clicked"
  
  function handleClick() {
    tog.classList.toggle(clicked);
  }