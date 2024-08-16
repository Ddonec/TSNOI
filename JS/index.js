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

    const container = document.querySelector('.ways-second-container');

    let isDragging = false;
    let startX;
    let scrollLeft;

    // Функция для начала прокрутки
    function startScroll(e) {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing'; // Устанавливаем курсор, когда перетаскиваем
      console.log("get")
    }

    // Функция для прокрутки
    function scrolling(e) {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Скорость прокрутки
      container.scrollLeft = scrollLeft - walk;
      console.log(walk)
    }

    // Функция для завершения прокрутки
    function endScroll() {
      isDragging = false;
      container.style.cursor = 'grab'; // Возвращаем курсор в исходное состояние
      console.log('push')
    }

    // Добавляем обработчики событий
    container.addEventListener('mousedown', startScroll);
    container.addEventListener('mousemove', scrolling);
    container.addEventListener('mouseup', endScroll);
    container.addEventListener('mouseleave', endScroll); // Для случая, когда мышь уходит за пределы контейнера
