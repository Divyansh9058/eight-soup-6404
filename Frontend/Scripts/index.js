var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var radios = document.getElementsByName("radio-btn");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.zIndex = "0";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Uncheck all radio buttons
  for (i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
  
  // Show current slide with a fade-in transition
  slides[slideIndex - 1].style.opacity = "1";
  slides[slideIndex - 1].style.zIndex = "1";
  
  // Check the corresponding radio button
  radios[slideIndex - 1].checked = true;
  
  // Call the function again after a delay to show the next slide
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


var speed = 10;

/* Call this function with a string containing the class name of the box
 * to increase the number within the box.*/
function incBoxNbr(className) {
  const boxes = document.querySelectorAll(className);
  boxes.forEach((box) => {
    const number = box.querySelector('.number');
    const endNbr = Number(number.innerHTML);
    incNbrRec(0, endNbr, number);
  });
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = " ";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    let c = +counter.innerText.replace(",", "");

    const increment = Math.ceil(target / 200);

    if (c < target) {
      c += increment;
      counter.innerText = numberWithCommas(c > target ? target : c);
      setTimeout(updateCounter, 10);
    }
  };

  updateCounter();
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const dropdownBtn = document.querySelector('.btnn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

