const slidingLoader = document.querySelector(".loader");
const nameAnim = document.querySelector(".name");
const shortDescriptionAnim = document.querySelector(".short_description");
const slidingJob = document.querySelector(".older_job_container");
const slidingContact = document.querySelector(".contact_container");
const slidingSources = document.querySelector(".sources_container");
const slidingHelp = document.querySelector(".help_me_container");
let a = document.getElementsByTagName("body");

function slide() {
  slidingLoader.classList.add("active");
  nameAnim.classList.add("active");
  shortDescriptionAnim.classList.add("active");
  slidingJob.classList.add("active");
  slidingContact.classList.add("active");
  slidingSources.classList.add("active");
  slidingHelp.classList.add("active");

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
const slidingSkillsLeft5 = document.querySelector(".left5");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingSkillsLeft5.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
  ) {
    slidingSkillsLeft5.classList.add("active");
  }
});

const slidingStrangerText = document.querySelector(".stranger_things");

function slidingTextStranger() {
  slidingStrangerText.classList.add("active");
}

const slidingStrangerTextRestart = document.querySelector(".stranger_things");

function slidingTextStrangerRestart() {
  slidingStrangerTextRestart.classList.remove("active");
}

const slidingSeoText = document.querySelector(".seo");

function slidingTextSeo() {
  slidingSeoText.classList.add("active");
}

const slidingSeoTextRestart = document.querySelector(".seo");

function slidingTextSeoRestart() {
  slidingSeoTextRestart.classList.remove("active");
}
