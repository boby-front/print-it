
//***************** BOUCLE INFINI QUI PERMET DE FAIRE DEFILER LES IMAGES AVEC LEUR DOT **********/

// On recupere toutes les éléments .dot  et insigne la dot actuelle avec une constante d'une valeur de 0//

const dots = document.querySelectorAll('.dot');
let currentDot = 0;

//On créé la fonction updateDots qui permet de mettre à jour l'affichage des points de navigation pour indiquer quelle diapositive est actuellement affichée.
//Elle utilise une boucle for pour parcourir tous les éléments HTML du tableau dots qui représentent les points de navigation. Pour chaque élément, 
//la fonction vérifie si l'index de l'élément est égal à la valeur de la variable currentDot. Si c'est le cas, la classe dot_selected est ajoutée à 
//l'élément pour le mettre en surbrillance et indiquer qu'il correspond à la diapositive actuelle. Sinon, la classe est retirée pour réinitialiser l'affichage.
//Ainsi, chaque fois que la fonction est appelée les points de navigation sont mis à jour pour refléter l'index de la diapositive actuelle.

function updateDots() {

	for (let index = 0; index < dots.length; index++) {
		const dot = dots[index];
		
		if(index == currentDot)
		{
			dot.classList.add('dot_selected');
		}
		else {
			dot.classList.remove('dot_selected');
}}}


//On recupere les elements fleche droite, fleche gauche en constante. //

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


//On ajoute des gestionnaires d'événements de "click" pour détecter lorsque l'utilisateur clique sur les flèches de navigation gauche et droite. 
//La condition if (event.button === 0) vérifie que l'utilisateur a cliqué avec le bouton gauche de la souris. Ensuite, la diapositive actuelle est 
//incrémentée ou décrémentée en fonction de la flèche de navigation sur laquelle l'utilisateur a cliqué. La fonction updateDots() est appelée à la fin de la conddition
// pour mettre à jour l'affichage des points de navigation et un message  est affiché dans la console pour indiquer la flèche sur laquelle l'utilisateur a cliqué.

arrowRight.addEventListener('click', (event) => {
	if (event.button === 0) { 
	  if (currentDot < dots.length - 1) {
		currentDot++;
	  } else {
		currentDot = 0;
	  }
	  updateDots();
	  console.log("Clic gauche sur la flèche droite !");
	} 
  });
  arrowLeft.addEventListener('click', (event) => {
	if (event.button === 0) { 
	  if (currentDot > 0) {
		currentDot--;
	  } else {
		currentDot = dots.length - 1;
	  }
	  updateDots();
	  console.log("Clic gauche sur la flèche gauche !");
	} 
  });

  
//--------------  IMAGE CHANGE ------------//

// ON RECUPERE LES INFORMATIONS DES IMAGES ET TEXTES DEPUIS CE TABLEAU //

//Ce  tableau  contient 4 objets dont chacun  a une image à afficher ('image') et une ligne de texte associée ('tagLine').

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

// - On initialise la variable "currentIndex" à 0. Cette variable sera utilisée pour suivre l'indice de la diapositive actuellement affichée.
// - On sélectionne l'élément HTML <img> avec la classe "banner-img" à partir du document et le stock dans la constante "imageElement". 
//   Cet élément sera utilisé pour afficher l'image de la diapositive.
// - On sélectionne l'élément HTML avec la classe "tagline" à partir du document et le stocke dans la constante "taglineElement". 
//   Cet élément sera utilisé pour afficher le texte de la diapositive.

let currentIndex = 0;
const imageElement = document.querySelector('img.banner-img');
const taglineElement = document.querySelector('.tagline');

// On créé la fonction "showSlide()" qui met à jour le contenu de la diapositive en utilisant les données du tableau "slides" et la variable "currentIndex". 
// Elle utilise la propriété "src" de l'élément <img> pour changer l'image de la diapositive et la méthode "innerHTML" pour mettre à jour le texte 
// affiché sur la diapositive.

function showSlide() {
	imageElement.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	taglineElement.innerHTML = slides[currentIndex].tagLine;
}

// Et enfin on attache un gestionnaire d'événements de clic sur les éléments  fleche gauche et droite pour reculer d'une diapositive ou avancer. 
// Lorsque la flèche est cliquée, la variable "currentIndex" est décrémentée ou incrémenté d'une unité, puis la fonction "showSlide()" est appelée 
// pour afficher la nouvelle diapositive.

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
