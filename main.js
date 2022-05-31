'use strict';
//document.queryseclector => class나 id 선정? 하는 거
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
// () =>  <<등록한 함수 호출인듯?
document.addEventListener('scroll', ()=> {
  console.log(window.scrollY); 
  // $ <<= 이새끼 쓸 때는 어퍼스트로피 써야 됨 ㅇㅇ
  console.log(`${navbarHeight}`);
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
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link); //event.target = 타겟이 되는 요소 로그에 보여줌
  // .dataset << 우리가 클래스에 data-link를 해놓음 .link 뭐이리 어렵냐
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"}); //scrollIntoView link에 걸린 곳으로 이동
  //여기 왜 오류남
});