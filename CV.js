const slidingLoader = document.querySelector(".loader");
const nameAnim = document.querySelector(".name");
const shortDescriptionAnim = document.querySelector(".short_description");
let a = document.getElementsByTagName("body");

function slide() {
  slidingLoader.classList.add("active");
  nameAnim.classList.add("active");
  shortDescriptionAnim.classList.add("active");

  for (valeur of a) {
    valeur.style.overflowY = "scroll";
  }
}

const slidingSkillsLeft1 = document.querySelector(".left1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingSkillsLeft1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
  ) {
    slidingSkillsLeft1.classList.add("active");
  }
});
const slidingSkillsLeft2 = document.querySelector(".left2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingSkillsLeft2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
  ) {
    slidingSkillsLeft2.classList.add("active");
  }
});
const slidingSkillsLeft4 = document.querySelector(".left4");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingSkillsLeft4.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
  ) {
    slidingSkillsLeft4.classList.add("active");
  }
});
const slidingSkillsLeft3 = document.querySelector(".left3");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingSkillsLeft3.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
  ) {
    slidingSkillsLeft3.classList.add("active");
  }
});
