document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const menu = document.getElementById("burger-menu-main");
    const body = document.body;
  
    burgerMenu.addEventListener("click", function() {
      burgerMenu.classList.toggle("change");
      menu.classList.toggle("show");
      
      if (menu.classList.contains("show")) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    });
  });
  