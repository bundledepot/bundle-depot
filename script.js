document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.hash);
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Scroll to the top of the target section
      });
    });
  });
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar2");
    const sticky = navbar.offsetTop;
  
    if (window.page YOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
    

  const navbar2 = document.querySelector('.navbar2');
const navbarHeight = navbar2.offsetHeight; // Get navbar2 height

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset; // Cross-browser compatible scroll position

  if (scrollY > navbarHeight) {
    navbar2.classList.add('sticky');
  } else {
    navbar2.classList.remove('sticky');
  }
});
