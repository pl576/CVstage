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

// const slidingStrangerText = document.querySelector(".stranger_things");

// function slidingTextStranger() {
//   slidingStrangerText.classList.add("active");
// }

// const slidingStrangerTextRestart = document.querySelector(".stranger_things");

// function slidingTextStrangerRestart() {
//   slidingStrangerTextRestart.classList.remove("active");
// }

// const slidingSeoText = document.querySelector(".seo");

// function slidingTextSeo() {
//   slidingSeoText.classList.add("active");
// }

// const slidingSeoTextRestart = document.querySelector(".seo");

// function slidingTextSeoRestart() {
//   slidingSeoTextRestart.classList.remove("active");
// }

const slidingList = document.querySelector(".list_sources");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = slidingList.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7
  ) {
    slidingList.classList.add("active");
  }
  if (
    scrollTop <
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7
  ) {
    slidingList.classList.remove("active");
  }
});

const animVagueUn = document.querySelector(".vague1");
const animVagueDeux = document.querySelector(".vague2");
const animCrafter = document.querySelector(".right_icon_crafter");
const animImg = document.querySelector(".beer_text img");
const animRightIconSide = document.querySelector(".right_icon_side");
const craftHover = document.querySelector(".craft_container");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = craftHover.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.6
  ) {
    animVagueUn.classList.add("active");
    animVagueDeux.classList.add("active");
    animCrafter.classList.add("active");
    animImg.classList.add("active");
    animRightIconSide.classList.add("active");
  }
  if (
    scrollTop <
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.6
  ) {
    animVagueUn.classList.remove("active");
    animVagueDeux.classList.remove("active");
    animCrafter.classList.remove("active");
    animImg.classList.remove("active");
    animRightIconSide.classList.remove("active");
  }
});

const seriesBookContainer = document.querySelector(".books_series");
const book = document.querySelector(".seo");
const series = document.querySelector(".stranger_things");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    seriesBookContainer.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.6
  ) {
    book.classList.add("active");
    series.classList.add("active");
  }
  if (
    scrollTop <
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.6
  ) {
    book.classList.remove("active");
    series.classList.remove("active");
  }
});

const rightThree = document.querySelector(".right3");
const rightFour = document.querySelector(".right4");
const softSkills1 = document.querySelector("#crea");
const softSkills2 = document.querySelector("#team");
const softSkills3 = document.querySelector("#critique");
const softSkills4 = document.querySelector("#service");
const softSkills5 = document.querySelector("#adapt");
const softSkills6 = document.querySelector("#tab");
const softSkills7 = document.querySelector("#krita");
const softSkills8 = document.querySelector("#office");
const softSkills9 = document.querySelector("#build");
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = rightThree.getBoundingClientRect().top;
  const topElementToTopViewport1 = rightFour.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
  ) {
    softSkills1.classList.add("active");
    softSkills2.classList.add("active");
    softSkills3.classList.add("active");
    softSkills4.classList.add("active");
    softSkills5.classList.add("active");
  }
  if (
    scrollTop >
    (scrollTop + topElementToTopViewport1).toFixed() - clientHeight * 0.5
  ) {
    softSkills6.classList.add("active");
    softSkills7.classList.add("active");
    softSkills8.classList.add("active");
    softSkills9.classList.add("active");
  }
});
