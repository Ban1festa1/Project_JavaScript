const slides = [
  {
    city: "Rostov-on-Don<br>LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
    img: "img/slide-1.png"
  },
  {
    city: "Sochi<br>Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
    img: "img/slide-2.png"
  },
  {
    city: "Rostov-on-Don<br>Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
    img: "img/slide-3.png"
  }
];

let current = 0;

const img = document.querySelector(".js-photo");
const city = document.querySelector(".js-city");
const area = document.querySelector(".js-area");
const time = document.querySelector(".js-time");
const cost = document.querySelector(".js-cost");

const tabs = [...document.querySelectorAll(".tab")];
const dots = [...document.querySelectorAll(".dot")];
const prev = document.querySelector(".arrow--left");
const next = document.querySelector(".arrow--right");

function setActive(list, i) {
  list.forEach((el, idx) => el.classList.toggle("is-active", idx === i));
}
function render(i) {
  const s = slides[i];
  img.src = s.img;
  city.innerHTML = s.city;
  area.textContent = s.area;
  time.textContent = s.time;
  cost.textContent = s.cost;
  setActive(tabs, i);
  setActive(dots, i);
  current = i;
}
tabs.forEach((b, i) => b.addEventListener("click", () => render(i)));
dots.forEach((b, i) => b.addEventListener("click", () => render(i)));
prev.addEventListener("click", () => render((current - 1 + slides.length) % slides.length));
next.addEventListener("click", () => render((current + 1) % slides.length));

render(0);

