
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//---------------  Right click , Left click ---------------//
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


arrowLeft.addEventListener("mouseup", (event) => {
	if (event.button === 0) {console.log("Clic gauche détecté arrowLeft !");}       
	 else if (event.button === 2) {
		console.log("Clic droit détecté arrowLeft !");}
});

arrowRight.addEventListener("mouseup", (event) => {
	if (event.button === 0) {console.log("Clic gauche détecté arrowRight!");} 
	else if (event.button === 2) {
		console.log("Clic droit détecté arrowRight !");}
});


//----------   Dots Selecter  -----------//
const dots = document.querySelectorAll('.dot');

let currentDot = 0;

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentDot) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

arrowRight.addEventListener('click', () => {
	currentDot++;
	if (currentDot >= dots.length) {
	  currentDot = 0;
	}
	updateDots();
  })

arrowLeft.addEventListener('click', () => {
	currentDot--;
	if (currentDot < 0) {
	  currentDot = 3;
  }
  updateDots();
})


//--------------  Image change ------------//
let currentIndex = 0;

const imageElement = document.querySelector('img.banner-img');
const taglineElement = document.querySelector('.tagline');

function showSlide() {
  imageElement.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  taglineElement.innerHTML = slides[currentIndex].tagLine;
}

arrowRight.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide();
});

arrowLeft.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide();
});
