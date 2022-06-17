const nav = document.querySelector(".header");
function fixedNavbar() {
    if (window.scrollY > 100) {
        nav.classList.add('fix_me');
    } else {
        nav.classList.remove('fix_me');
    }
}
window.addEventListener('scroll', fixedNavbar);
//news 
const nav1 = document.querySelector('#header__skill');
// const topOfNavbar=nav.element.offsetTop;
function fixedNavbar() {
    if (window.scrollY > 100) {
        nav1.classList.add('fix_me');
    } else {
        nav1.classList.remove('fix_me');
    }
}
window.addEventListener('scroll', fixedNavbar);
//  news end


const obj = document.getElementById("value");
const obj1 = document.getElementById("value1");
const obj2 = document.getElementById("value2");

function reqemler(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }


  reqemler(obj, 0, 220, 1500);
  reqemler(obj1,0,25,1500);
  reqemler(obj2,0.1,3.0,1500);


  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".navbar__content__menu-list");
  const menubtn = document.querySelector(".menu-btn");
  const cancelbtn = document.querySelector(".cancel-btn");
  menubtn.onclick = () => {
    menu.classList.add("active");
    menubtn.classList.add("hide");
  };
  cancelbtn.onclick = () => {
    menu.classList.remove("active");
    menubtn.classList.remove("hide");
  };
 
  window.onscroll = () => {
    this.scrollY > 20
      ? navbar.classList.add("sticky")
      : navbar.classList.remove("sticky");
  };


