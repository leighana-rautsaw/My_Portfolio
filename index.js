// index.js





// Contact Page Container //

window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;

    const minWidth = 1800;
  
    const myDiv = document.getElementById('contact-content-container');
  
    if (screenWidth >= minWidth) {
      myDiv.classList.add('container');
    } else {
      myDiv.classList.remove('container');
    }
});










// Big Design Process Scroll To //

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-research");
  const researchSection = document.querySelector(".research-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = researchSection.offsetTop; 

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-empathize");
  const empathizeSection = document.querySelector(".empathize-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetPosition = empathizeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-define");
  const defineSection = document.querySelector(".define-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetPosition = defineSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-ideate");
  const ideateSection = document.querySelector(".ideate-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetPosition = ideateSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-prototype");
  const prototypeSection = document.querySelector(".prototype-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetPosition = prototypeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-test");
  const testSection = document.querySelector(".test-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetPosition = testSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-conclusion");
  const conclusionSection = document.querySelector(".conclusion-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetPosition = conclusionSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});










// Research Section scroll-button-small1 //

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-research-small1");
  const researchSection = document.querySelector(".research-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = researchSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-empathize-small1");
  const empathizeSection = document.querySelector(".empathize-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = empathizeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-define-small1");
  const defineSection = document.querySelector(".define-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = defineSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-ideate-small1");
  const ideateSection = document.querySelector(".ideate-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = ideateSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-prototype-small1");
  const prototypeSection = document.querySelector(".prototype-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = prototypeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-test-small1");
  const testSection = document.querySelector(".test-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = testSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-conclusion-small1");
  const conclusionSection = document.querySelector(".conclusion-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = conclusionSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});










// Empathize Section scroll-button-small2 //

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-research-small2");
  const researchSection = document.querySelector(".research-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = researchSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-empathize-small2");
  const empathizeSection = document.querySelector(".empathize-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = empathizeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-define-small2");
  const defineSection = document.querySelector(".define-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = defineSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-ideate-small2");
  const ideateSection = document.querySelector(".ideate-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = ideateSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-prototype-small2");
  const prototypeSection = document.querySelector(".prototype-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = prototypeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-test-small2");
  const testSection = document.querySelector(".test-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = testSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-conclusion-small2");
  const conclusionSection = document.querySelector(".conclusion-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = conclusionSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});










// Define Section scroll-button-small3 //

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-research-small3");
  const researchSection = document.querySelector(".research-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = researchSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-empathize-small3");
  const empathizeSection = document.querySelector(".empathize-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = empathizeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-define-small3");
  const defineSection = document.querySelector(".define-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = defineSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-ideate-small3");
  const ideateSection = document.querySelector(".ideate-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = ideateSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-prototype-small3");
  const prototypeSection = document.querySelector(".prototype-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = prototypeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-test-small3");
  const testSection = document.querySelector(".test-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = testSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-conclusion-small3");
  const conclusionSection = document.querySelector(".conclusion-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = conclusionSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});










// Ideate Section scroll-button-small4 //

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-research-small4");
  const researchSection = document.querySelector(".research-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = researchSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-empathize-small4");
  const empathizeSection = document.querySelector(".empathize-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = empathizeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-define-small4");
  const defineSection = document.querySelector(".define-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = defineSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-ideate-small4");
  const ideateSection = document.querySelector(".ideate-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = ideateSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-prototype-small4");
  const prototypeSection = document.querySelector(".prototype-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = prototypeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-test-small4");
  const testSection = document.querySelector(".test-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = testSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-conclusion-small4");
  const conclusionSection = document.querySelector(".conclusion-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = conclusionSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});










// Prototype Section scroll-button-small5 //

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-research-small5");
  const researchSection = document.querySelector(".research-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = researchSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-empathize-small5");
  const empathizeSection = document.querySelector(".empathize-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = empathizeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-define-small5");
  const defineSection = document.querySelector(".define-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = defineSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-ideate-small5");
  const ideateSection = document.querySelector(".ideate-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = ideateSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-prototype-small5");
  const prototypeSection = document.querySelector(".prototype-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = prototypeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-test-small5");
  const testSection = document.querySelector(".test-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = testSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-conclusion-small5");
  const conclusionSection = document.querySelector(".conclusion-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = conclusionSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});










// Test Section scroll-button-small2 //

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-research-small6");
  const researchSection = document.querySelector(".research-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = researchSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-empathize-small6");
  const empathizeSection = document.querySelector(".empathize-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = empathizeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-define-small6");
  const defineSection = document.querySelector(".define-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = defineSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-ideate-small6");
  const ideateSection = document.querySelector(".ideate-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = ideateSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-prototype-small6");
  const prototypeSection = document.querySelector(".prototype-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = prototypeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-test-small6");
  const testSection = document.querySelector(".test-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = testSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-conclusion-small6");
  const conclusionSection = document.querySelector(".conclusion-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = conclusionSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});










// Conclusion Section scroll-button-small7 //

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-research-small7");
  const researchSection = document.querySelector(".research-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = researchSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-empathize-small7");
  const empathizeSection = document.querySelector(".empathize-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = empathizeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-define-small7");
  const defineSection = document.querySelector(".define-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = defineSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-ideate-small7");
  const ideateSection = document.querySelector(".ideate-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = ideateSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-prototype-small7");
  const prototypeSection = document.querySelector(".prototype-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = prototypeSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-test-small7");
  const testSection = document.querySelector(".test-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = testSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button-conclusion-small7");
  const conclusionSection = document.querySelector(".conclusion-section");

  scrollButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const targetPosition = conclusionSection.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});