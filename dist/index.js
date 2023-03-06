const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar-element");


hamburger.addEventListener("click", ()=> {
    navbar.classList.toggle("active");

    if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    }
    else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    }
});

const accordionHeader = document.querySelectorAll('.accordion-header');

accordionHeader.forEach(header => {
  header.addEventListener('click', function() {
    const parent = this.parentElement;
    const body = parent.querySelector('.accordion-body');
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
  });
});



  


