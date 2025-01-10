// animation for cards 
const productCards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

// animation for carousel cards  
productCards.forEach(card => observer.observe(card));
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const scrollInterval = 3000; // 3 seconds
    const scrollStep = 350;
    const autoScroll = () => {
      const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
      if (carouselContainer.scrollLeft >= maxScrollLeft) {
        carouselContainer.scrollLeft = 0;
      } else {
        carouselContainer.scrollLeft += scrollStep;
      }
    };
    setInterval(autoScroll, scrollInterval);
  });
  
// animation for title of project 
document.addEventListener('DOMContentLoaded', () => {
 const cardTitle = document.querySelector('.card-name');
 const text = "Welcome to PhoneHub";
 let index = 0;
 let isErasing = false;
  const typeEffect = () => {
    if (isErasing) {
       cardTitle.textContent = text.substring(0, index--);
        if (index < 0) {
          isErasing = false; 
        }
      } else {
       cardTitle.textContent = text.substring(0, index++);
        if (index > text.length) {
          isErasing = true; 
          setTimeout(typeEffect, 1000); 
          return;
        }
      }
    setTimeout(typeEffect, isErasing ? 50 : 150); 
    };
  
    typeEffect();
});

//for accessing each phone from dropdown
  document.addEventListener('DOMContentLoaded', () => {
    const allSections = document.querySelectorAll('.android');
    allSections.forEach(section => {
      section.style.display = 'block'; 
    });
  });
  
  

 
  
