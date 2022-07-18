'use strict';
//document.queryseclector => class나 id 선정? 하는 거
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
// () =>  <<등록한 함수 호출인듯?
document.addEventListener('scroll', ()=> { 
  // $ <<= 이새끼 쓸 때는 어퍼스트로피 써야 됨 ㅇㅇ
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// navbar 메뉴 클릭했을 때
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link; //ㄹㅇ 이해 안됨 <<<<<<<<<<<<<<<<<
  if (link == null) {
    return;
  }

  scroll(link);
});
  /*
  console.log(event.target.dataset.link); //event.target = 타겟이 되는 요소 로그에 보여줌
  // .dataset << 우리가 클래스에 data-link를 해놓음 .link 뭐이리 어렵냐
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"}); //scrollIntoView link에 걸린 곳으로 이동
  //여기 왜 오류남
});
*/
//contact로 바꾸기 
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', () => {
  scroll('#contact');
});


//스크롤 하면 홈 transparent
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//화살표 모양
const arrow = document.querySelector('.arrow');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2 ) {
    arrow.classList.add('visible');
  } else {
    arrow.classList.remove('visible');
  }
});

arrow.addEventListener('click', () => {
  scroll('#home');
});



//클릭함수 
function scroll(sel) {
  document.querySelector(sel).scrollIntoView({behavior:'smooth'});
}
