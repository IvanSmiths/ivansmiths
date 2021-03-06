const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

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

const header = document.querySelector('#header-link');
const skills = document.querySelector('#skills-link');
const about = document.querySelector('#about-link');
// const works = document.querySelector('#works-link');
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

// function worksScroll() {
//   document.querySelector('#works').scrollIntoView({
//     behavior: 'smooth',
//   });
// }

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
  document.querySelector('#projects').scrollIntoView({
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

// works.addEventListener('click', () => {
//   worksScroll();
// });

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

//                  MODAL BEGIN

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

const modal2 = document.querySelector('#my-modal2');
const modalBtn2 = document.querySelector('#modal-btn2');
const closeBtn2 = document.querySelector('.close2');

modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);

function openModal2() {
  modal2.style.display = 'block';
}

function closeModal2() {
  modal2.style.display = 'none';
}

function outsideClick2(e) {
  if (e.target == modal2) {
    modal2.style.display = 'none';
  }
}
const modal3 = document.querySelector('#my-modal3');
const modalBtn3 = document.querySelector('#modal-btn3');
const closeBtn3 = document.querySelector('.close3');

modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);
window.addEventListener('click', outsideClick3);

function openModal3() {
  modal3.style.display = 'block';
}

function closeModal3() {
  modal3.style.display = 'none';
}

function outsideClick3(e) {
  if (e.target == modal3) {
    modal3.style.display = 'none';
  }
}

const modal4 = document.querySelector('#my-modal4');
const modalBtn4 = document.querySelector('#modal-btn4');
const closeBtn4 = document.querySelector('.close4');

modalBtn4.addEventListener('click', openModal4);
closeBtn4.addEventListener('click', closeModal4);
window.addEventListener('click', outsideClick4);

function openModal4() {
  modal4.style.display = 'block';
}

function closeModal4() {
  modal4.style.display = 'none';
}

function outsideClick4(e) {
  if (e.target == modal4) {
    modal4.style.display = 'none';
  }
}

const modal5 = document.querySelector('#my-modal5');
const modalBtn5 = document.querySelector('#modal-btn5');
const closeBtn5 = document.querySelector('.close5');

modalBtn5.addEventListener('click', openModal5);
closeBtn5.addEventListener('click', closeModal5);
window.addEventListener('click', outsideClick5);

function openModal5() {
  modal5.style.display = 'block';
}

function closeModal5() {
  modal5.style.display = 'none';
}

function outsideClick5(e) {
  if (e.target == modal5) {
    modal5.style.display = 'none';
  }
}

//                  TOGGLE BEGIN

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

document
  .querySelector('model-viewer')
  .addEventListener('ar-status', (event) => {
    if (event.detail.status === 'failed') {
      const error = document.querySelector('#error');
      error.classList.remove('hide');
      error.addEventListener('transitionend', (event) => {
        error.classList.add('hide');
      });
    }
  });
