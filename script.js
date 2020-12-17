const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });

  //Hamburger Animation
  hamburger.classList.toggle('toggle');
});

//                  WRITE BEGIN
//                  WRITE BEGIN
//                  WRITE BEGIN

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 140;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 100;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}

//                  SCROLL BEGIN
//                  SCROLL BEGIN
//                  SCROLL BEGIN

const header = document.querySelector('#header-link');
const skills = document.querySelector('#skills-link');
const about = document.querySelector('#about-link');
const works = document.querySelector('#works-link');
const projects = document.querySelector('#projects-link');
const contact = document.querySelector('#contact-link');
const worksBtn = document.querySelector('#works-button');
const contactBtn = document.querySelector('#contact-button');

function headerScroll() {
  document.querySelector('#header').scrollIntoView({
    behavior: 'smooth',
  });
}

function skillsScroll() {
  document.querySelector('#skills').scrollIntoView({
    behavior: 'smooth',
  });
}

function aboutScroll() {
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth',
  });
}

function worksScroll() {
  document.querySelector('#works').scrollIntoView({
    behavior: 'smooth',
  });
}

function projectScroll() {
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth',
  });
}

function contactScroll() {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth',
  });
}

function worksScrollBtn() {
  document.querySelector('#works').scrollIntoView({
    behavior: 'smooth',
  });
}

function contactScrollBtn() {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth',
  });
}

skills.addEventListener('click', () => {
  skillsScroll();
});

header.addEventListener('click', () => {
  headerScroll();
});

about.addEventListener('click', () => {
  aboutScroll();
});

works.addEventListener('click', () => {
  worksScroll();
});

projects.addEventListener('click', () => {
  projectScroll();
});

contact.addEventListener('click', () => {
  contactScroll();
});

worksBtn.addEventListener('click', () => {
  worksScrollBtn();
});

contactBtn.addEventListener('click', () => {
  contactScrollBtn();
});

//                  TOGGLE BEGIN
//                  TOGGLE BEGIN
//                  TOGGLE BEGIN

const wave = document.querySelector('#wave');

function click() {
  wave.addEventListener('click', function (e) {
    console.log('clicked');
  });
}

function displayDate() {
  document.getElementById('wave').innerHTML = Date();
}

click();

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('wave').innerHTML = 'fill="rgba(36, 237, 241)"';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const nav = document.querySelector('nav');
const navLink = document.querySelector('.nav-links');
const sectionOne = document.querySelector('.header');

const sectionOneOptions = {
  rootMargin: '-200px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add('nav-scrolled');
      navLink.classList.add('links-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
      navLinks.classList.remove('links-scrolled');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
