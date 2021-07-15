const homePage = document.querySelector("#home-page");
const aboutPage = document.querySelector("#about-page");
const projectsPage = document.querySelector("#projects-page");
const contactPage = document.querySelector("#contact-page");

const homeBtn = document.querySelector("#home-button");
const aboutBtn = document.querySelector("#about-button");
const projectsBtn = document.querySelector("#projects-button");
const contactBtn = document.querySelector("#contact-button");

const ctaProjects = document.querySelector("#cta-projects");
const ctaContact = document.querySelector("#cta-contact");

const contents = [homePage, aboutPage, projectsPage, contactPage];

const fadeInPage = (x) => {
  gsap.from(x, { opacity: 0, duration: "1", ease: "power2.out" });
};

const slideInPage = (x) => {
  gsap.from(x, { y: "-100vh", duration: 1, ease: "power1.out" });
};

const addClass = (x) => {
  x.classList.add("active-button");
};

const removeClass = (x, y, z) => {
  x.classList.remove("active-button");
  y.classList.remove("active-button");
  z.classList.remove("active-button");
};

homeBtn.addEventListener("click", () => {
  homePage.style.display = "block";
  homeBtn.disabled = true;
  fadeInPage(homePage);
  addClass(homeBtn);
  removeClass(aboutBtn, projectsBtn, contactBtn);
  for (let x of [aboutPage, projectsPage, contactPage]) {
    x.style.display = "none";
  }
});

aboutBtn.addEventListener("click", () => {
  aboutPage.style.display = "block";
  fadeInPage(aboutPage);
  addClass(aboutBtn);
  removeClass(homeBtn, projectsBtn, contactBtn);
  for (let x of [homePage, projectsPage, contactPage]) {
    x.style.display = "none";
  }
});

projectsBtn.addEventListener("click", () => {
  projectsPage.style.display = "block";
  fadeInPage(projectsPage);
  addClass(projectsBtn);
  removeClass(aboutBtn, homeBtn, contactBtn);
  for (let x of [homePage, aboutPage, contactPage]) {
    x.style.display = "none";
  }
});

ctaProjects.addEventListener("click", () => {
  projectsPage.style.display = "block";
  fadeInPage(projectsPage);
  addClass(projectsBtn);
  removeClass(aboutBtn, homeBtn, contactBtn);
  for (let x of [homePage, aboutPage, contactPage]) {
    x.style.display = "none";
  }
});

contactBtn.addEventListener("click", () => {
  contactPage.style.display = "block";
  fadeInPage(contactPage);
  addClass(contactBtn);
  removeClass(aboutBtn, projectsBtn, homeBtn);
  for (let x of [homePage, aboutPage, projectsPage]) {
    x.style.display = "none";
  }
});

ctaContact.addEventListener("click", () => {
  contactPage.style.display = "block";
  fadeInPage(contactPage);
  addClass(contactBtn);
  removeClass(aboutBtn, projectsBtn, homeBtn);
  for (let x of [homePage, aboutPage, projectsPage]) {
    x.style.display = "none";
  }
});

for (let i = 0; i < contents.length; i++) {
  if (contents[i].style.display !== "none") {
    for (let x of contents) {
      if (x != contents[i]) {
        x.style.display = "none";
      }
    }
  }
}

const projectImages = document.querySelectorAll(".project img");
const projects = document.querySelectorAll(".project");
const hiddenText = document.querySelectorAll(".hidden-text");

for (let i = 0; i < projects.length; i++) {
  projectImages[i].addEventListener("mouseover", () => {
    hiddenText[i].style.opacity = "1";
    projectImages[i].style.transform = "scale(1.2)";
    projectImages[i].style.opacity = "0.2";
  });

  projectImages[i].addEventListener("mouseout", () => {
    hiddenText[i].style.opacity = "0";
    projectImages[i].style.transform = "scale(1)";
    projectImages[i].style.opacity = "1";
  });
}

const tl = gsap.timeline({
  defaults: { ease: "power2.out ", duration: "1.5" },
});
