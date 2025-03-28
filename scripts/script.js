const popup = document.getElementById('popup');

function handlePopup(open) {
  popup.classList[open ? 'add' : 'remove']('opened');
}

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 500,
  transition: true
});

let navBar = document.querySelector('#header-bar')

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY

  if (scrollTop > 0) {
    navBar.classList.add('rolar')
  } else {
    navBar.classList.remove('rolar')
  }
})

// NAVBAR:
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, btnContato) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.btnContato = document.querySelector(btnContato);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleContatoClick = this.handleContatoClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }


  handleLinkClick() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    this.animateLinks();
  }


  handleContatoClick() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);


    this.navLinks.forEach((link) => {
      link.addEventListener("click", this.handleLinkClick);
    });


    if (this.btnContato) {
      this.btnContato.addEventListener("click", this.handleContatoClick);
    }
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  ".btn-contato"
);

mobileNavbar.init();


// efeito card

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    slidesPerView: 1,
    // spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 2,
      },
    },
  });
});