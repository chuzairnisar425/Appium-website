let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};


var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      this.parentElement.classList.toggle('active');
      var pannel = this.nextElementSibling;
      if (pannel.style.display === 'block') {
        pannel.style.display = 'none';
      } else {
        pannel.style.display = 'block'; // corrected the assignment
      }
    });
    // Initially hide the pannels
    acc[i].nextElementSibling.style.display = 'none';
  }


  document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader-wrapper');
    
    // Show loader
    loader.style.display = 'flex';
  
    // Hide loader when content is loaded
    window.addEventListener('load', function () {
      loader.style.display = 'none';
    });
  });

  window.addEventListener('scroll', function() {
    var button = document.querySelector('.gotopbtn');
    var footer = document.querySelector('.footer');
    
    // Show the button when user scrolls
    if (window.scrollY > 100) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
    
    // Adjust the z-index of the button when it reaches the footer
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (footerPosition < windowHeight) {
      button.style.zIndex = '1000';
    } else {
      button.style.zIndex = '999';
    }
  });
  
  


var swiper = new Swiper(".home-slider", {
  loop: true,
clickable: true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


  window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var homeSection = document.querySelector('.home-about');

    if (window.scrollY > homeSection.offsetHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  
  

