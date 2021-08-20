console.log("test")

////////////////////////

fetch('assets/js/books.json')
	.then(response => response.json())
	.then((jsonBooks) => {
		// récupération des UL du HTML
		let litteratureList = document.querySelector("#litterature");
		let policierList = document.querySelector("#thriller");
		let jeunesseList = document.querySelector("#youth");
		let histoireList = document.querySelector("#history");
		let scienceList = document.querySelector("#science");

		// récupération des données
		let histoireData = jsonBooks.histoire;
		let litteratureData = jsonBooks.litterature;
		let scienceData = jsonBooks.science;
		let policierData = jsonBooks.policier;
		let jeunesseData = jsonBooks.jeunesse;

		let ulContent = (bookData, bookList) => {
			bookData.map((book) => {

				let title = book.original_title;
				let author = book.author;
				let overview = book.overview;
				let poster = book.poster_path;
				let price = book.price;
				let id = book.id;

				let bookElToInject = `
		  	<div class='col-12 col-sm-6 col-xl-2 mb-3'>
		  	  <div class='row no-gutters'>
				<div class="col-12 text-end"><img src="assets/img/bag-plus.svg" alt="Logo ajouter au panier" class='add' data-id="${id}" data-qt="1"></div>
		  	    <div class='col-md-5'>
		  	      <img class='img-fluid' src='${poster}' />
		  	    </div>
		  	    <div class='col-md-7 pl-2'>
		  	      <h5 class="pt-3 pt-md-0 ">${title}</h5>
		  	      <h4 class="pt-3 pt-md-0">${author}</h4>
		  	      <p id='synopsis'>${overview}</p>
		  	      <p>${price}</p>
              
		  	    </div>
		  	  </div>
		  	</div>`;

				bookList.innerHTML += bookElToInject;

			}) // map


		} // function

		ulContent(litteratureData, litteratureList)
		ulContent(policierData, policierList)
		ulContent(histoireData, histoireList)
		ulContent(jeunesseData, jeunesseList)
		ulContent(scienceData, scienceList)

	})


let cart = [
	[6001, 2],
	[2002, 3],
	[2006, 1],
	[6005, 1]
];
let itemSelected = []; // tableau contenant ID et QT du produit choisi
let addBtn = document.querySelectorAll('.add'); // tous les bouttons add

/// FONCTIONS DE LUCILE 

let addToCart = ((refProduct) => {
	let pushInCart = true; // déclare à true, sinon undefined

	// forEach sur cart, si 1er élément de chaque item de cart = refProduct, pushToCart = false.
	cart.forEach((item) => {
		if (item[0] == refProduct) {
			pushInCart = false;
			increaseQuantity(refProduct);
			
		}
	})

	// Si pushInCart est resté à true, pousse les données dans Cart[]
	if (pushInCart) {
		cart.push(itemSelected);
		
	}

	
}); // addToCart


for (let i = 0; i < addBtn.length; i++) {
	addBtn[i].addEventListener('click', (event) => {
		itemSelected = [event.target.dataset.id, parseInt(event.target.dataset.qt)];
		addToCart(itemSelected[0]);
	})
}



//////////////////////// les fonctions pour le panier 



function clearCart() {
	cart = []
}


function increaseQuantity(refProduct) {

	cart.forEach((item) => {

		if (item[0] == refProduct) {
			item[1]++
		}
	})

}


function removeProductFromCart(refProduct) {

	cart.forEach((item) => {
		if (item[0] == refProduct) {

			let indexToRemove = cart.indexOf(item);

			console.log(cart.indexOf(item)) // affiche l'index de l'élément appelé AVANT sa suppression

			cart.splice(indexToRemove, 1); // suppression ici (du coup)
			/* Si on met "item", ça renvoie le tableau de l'item, et si on met "item[0]" ça renvoie la chaine de l'ID.
		  * Donc on utilise l'index car c'est un "Number" (slice n'accepte que les nombres pour ses deux premiers paramètres),
				  et ça indique en même temps sa position dans le tableau Cart ! 
		  */
			console.log(cart.indexOf(item)) // affiche "-1" car après il n'exite plus

		}
	})

}



function decreaseQuantity(refProduct) {

	cart.forEach((item) => {
		if (item[0] == refProduct && item[1] > 1) {
			item[1]--
		} else if (item[0] == refProduct && item[1] == 1) {
			removeProductFromCart(refProduct)
		}
	})

}



addBtn.onclick = function () {

	document.getElementById("articleInCart").innerHTML = `<p>test</p>`;

}


///////////////////////////////////////////////

// modale pour le panier
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}








//*******************TEST*******************//

// let btnPlus = document.getElementById("btnPlus");
// let btnLess = document.getElementById("btnLess");


// btnPlus.onclick = function increaseQuantity() {

// }

// btnLess.onclick = function decreaseQuantity() {

// }

