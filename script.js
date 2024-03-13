
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('hide-from-left')) {
      entry.target.classList.add('show-from-left');
    }
      else if (entry.target.classList.contains('hide-from-right')){
        entry.target.classList.add('show-from-right');
      }
      else if (entry.target.classList.contains('hide-from-bottom')) {
        entry.target.classList.add('show-from-bottom');
      }
    }
    else {
      entry.target.classList.remove('show-from-left');
      entry.target.classList.remove('show-from-right');
      entry.target.classList.remove('show-from-bottom');
    }
  });
});

const hiddenElements = document.querySelectorAll('.text');

hiddenElements.forEach((el) => observer.observe(el));
