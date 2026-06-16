const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const closeMenu = document.getElementById("closeMenu");

/* OPEN MENU */

menuBtn.addEventListener("click", () => {

  navLinks.classList.add("active");

});

/* CLOSE MENU */

closeMenu.addEventListener("click", () => {

  navLinks.classList.remove("active");

});

/* NAVBAR SCROLL EFFECT */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }else{

    navbar.classList.remove("scrolled");

  }

});

// SIMPLE FADE ANIMATION

const cards = document.querySelectorAll(
  ".feature-card, .destination-card, .testimonial-card"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.2
});

cards.forEach(card => {

  card.classList.add("hidden");
  observer.observe(card);

});







/* MOBILE TOUCH FLIP */

const destinationCards = document.querySelectorAll(".destination-card");

destinationCards.forEach(card => {

  card.addEventListener("click", () => {

    // close others

    destinationCards.forEach(other => {

      if(other !== card){
        other.classList.remove("active");
      }

    });

    // toggle clicked

    card.classList.toggle("active");

  });

});