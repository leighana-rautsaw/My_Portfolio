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










// Synchrovae Slide Function //

document.addEventListener("DOMContentLoaded", function () {
  const synchrovaeimages = [
    "Portfolio_Images/1-synchrovae-journey-map.png",
    "Portfolio_Images/1-synchrovae-value-proposition.png",
    "Portfolio_Images/1-synchrovae-storyboard.png",
    "Portfolio_Images/1-synchrovae-user-scenario.png"
  ];
  let synchrovaecurrentImageIndex = 0;
  const synchrovaesliderImage = document.querySelector(".synchrovae-slider-image");
  const synchrovaearrowLeft = document.querySelector(".synchrovae-left-arrow");
  const synchrovaearrowRight = document.querySelector(".synchrovae-right-arrow");
  const synchrovaecircles = document.querySelectorAll('.circle');

  synchrovaecircles[0].classList.add('synchrovae-filled');

  synchrovaearrowLeft.addEventListener("click", () => {
    synchrovaecircles[synchrovaecurrentImageIndex].classList.remove('synchrovae-filled');
    synchrovaecurrentImageIndex = (synchrovaecurrentImageIndex - 1 + synchrovaeimages.length) % synchrovaeimages.length;
    synchrovaesliderImage.src = synchrovaeimages[synchrovaecurrentImageIndex];
    synchrovaecircles[synchrovaecurrentImageIndex].classList.add('synchrovae-filled');
  });

  synchrovaearrowRight.addEventListener("click", () => {
    synchrovaecircles[synchrovaecurrentImageIndex].classList.remove('synchrovae-filled');
    synchrovaecurrentImageIndex = (synchrovaecurrentImageIndex + 1) % synchrovaeimages.length;
    synchrovaesliderImage.src = synchrovaeimages[synchrovaecurrentImageIndex];
    synchrovaecircles[synchrovaecurrentImageIndex].classList.add('synchrovae-filled');
  });
});










// BSA Slide Function //

document.addEventListener("DOMContentLoaded", function () {
  const bsaimages = [
    "Portfolio_Images/2-bsa-journey-map.png",
    "Portfolio_Images/2-bsa-value-proposition.png",
    "Portfolio_Images/2-bsa-storyboard.png",
    "Portfolio_Images/2-bsa-user-scenario.png"
  ];
  let bsacurrentImageIndex = 0;
  const bsasliderImage = document.querySelector(".bsa-slider-image");
  const bsaarrowLeft = document.querySelector(".bsa-left-arrow");
  const bsaarrowRight = document.querySelector(".bsa-right-arrow");
  const bsacircles = document.querySelectorAll('.circle');

  bsacircles[0].classList.add('bsa-filled');

  bsaarrowLeft.addEventListener("click", () => {
    bsacircles[bsacurrentImageIndex].classList.remove('bsa-filled');
    bsacurrentImageIndex = (bsacurrentImageIndex - 1 + bsaimages.length) % bsaimages.length;
    bsasliderImage.src = bsaimages[bsacurrentImageIndex];
    bsacircles[bsacurrentImageIndex].classList.add('bsa-filled');
  });

  bsaarrowRight.addEventListener("click", () => {
    bsacircles[bsacurrentImageIndex].classList.remove('bsa-filled');
    bsacurrentImageIndex = (bsacurrentImageIndex + 1) % bsaimages.length;
    bsasliderImage.src = bsaimages[bsacurrentImageIndex];
    bsacircles[bsacurrentImageIndex].classList.add('bsa-filled');
  });
});










// Student Counsel Slide Function //

document.addEventListener("DOMContentLoaded", function () {
  const studentimages = [
    "Portfolio_Images/4-student-journey-map.png",
    "Portfolio_Images/4-student-value-proposition.png",
    "Portfolio_Images/4-student-storyboard.png",
    "Portfolio_Images/4-student-user-scenario.png"
  ];
  let studentcurrentImageIndex = 0;
  const studentsliderImage = document.querySelector(".student-slider-image");
  const studentarrowLeft = document.querySelector(".student-left-arrow");
  const studentarrowRight = document.querySelector(".student-right-arrow");
  const studentcircles = document.querySelectorAll('.circle');

  studentcircles[0].classList.add('student-filled');

  studentarrowLeft.addEventListener("click", () => {
    studentcircles[studentcurrentImageIndex].classList.remove('student-filled');
    studentcurrentImageIndex = (studentcurrentImageIndex - 1 + studentimages.length) % studentimages.length;
    studentsliderImage.src = studentimages[studentcurrentImageIndex];
    studentcircles[studentcurrentImageIndex].classList.add('student-filled');
  });

  studentarrowRight.addEventListener("click", () => {
    studentcircles[studentcurrentImageIndex].classList.remove('student-filled');
    studentcurrentImageIndex = (studentcurrentImageIndex + 1) % studentimages.length;
    studentsliderImage.src = studentimages[studentcurrentImageIndex];
    studentcircles[studentcurrentImageIndex].classList.add('student-filled');
  });
});







