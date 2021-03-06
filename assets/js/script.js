fetch('assets/js/books.json')
	.then(response => response.json())
	.then((jsonBooks) => {
		// récupération des données JSON
		let histoireData = jsonBooks.histoire;
		let litteratureData = jsonBooks.litterature;
		let scienceData = jsonBooks.science;
		let policierData = jsonBooks.policier;
		let jeunesseData = jsonBooks.jeunesse;

		// AFFICHER LES LIVRES DANS DOM //
		// récupération des DIV container (catégories) du HTML
		let litteratureList = document.querySelector("#litterature");
		let policierList = document.querySelector("#thriller");
		let jeunesseList = document.querySelector("#youth");
		let histoireList = document.querySelector("#history");
		let scienceList = document.querySelector("#science");

		// fonction à répéter pour chaque div container
		let ulContent = (bookData, bookList) => {
			bookData.map((book) => {

				let title = book.original_title;
				let id = book.id;
				let author = book.author;
				let overview = book.overview;
				let poster = book.poster_path;
				let price = book.price;

				// items à ajouter
				let bookElToInject = `
		  	<div id="${id}" class='col-12 col-sm-6 col-xl-2 mb-3'>
		  	  <div class='row no-gutters'>
		  		<div class="col-12 text-end"><img src="assets/img/bag-plus.svg" alt="Logo ajouter au panier" class='add' data-id="${id}" data-qt="1"></div>
		  	    <div class='col-md-5'>
		  	      <img class='img-fluid' src='${poster}' />
		  	    </div>
		  	    <div class='col-md-7 pl-2'>
		  	      <h5 class="pt-3 pt-md-0">${title}</h5>
		  	      <h4 class="pt-3 pt-md-0">${author}</h4>
		  	      <p id='synopsis'>${overview}</p>
		  	      <p>${price}€</p>
		  	    </div>
		  	  </div>
		  	</div>`;

				bookList.innerHTML += bookElToInject;

			})// map
		} // function

		// fonction par catégorie
		ulContent(litteratureData, litteratureList)
		ulContent(policierData, policierList)
		ulContent(histoireData, histoireList)
		ulContent(jeunesseData, jeunesseList)
		ulContent(scienceData, scienceList)

		//////////////////////// FUNCTIONS TO CALL /////////////////////////

		// let cart = [["6001", 2], ["6002", 1], ["4007", 1]];
		let cart = []; // tableau contenant les produits ajoutés
		let itemSelected = []; // tableau contenant ID et QT du produit choisi

		/******* PARTIE LUCILE *******/
		// function add to cart
		let addToCart = ((refProduct) => {
			let pushInCart = true; // déclare à true, sinon undefined

			// forEach sur cart, si 1er élément de chaque item de cart = refProduct, pushToCart = false.
			cart.forEach((item) => {
				if (item[0] == refProduct) {
					pushInCart = false;
					increaseQuantity(refProduct);
					console.log(refProduct, item[0], 'D');
				}
			})

			// Si pushInCart est resté à true, pousse les données dans Cart[]
			if (pushInCart) {
				cart.push(itemSelected);
				console.log(refProduct, 'A')
			}

			console.log(cart)
		}); // addToCart

		// function to show the badge on cart
		let notifContainer = document.querySelector('#notif')
		let badgeCart = () => {
			(cart.length > 0) ? notifContainer.classList.replace('d-none', 'notif') : notifContainer.classList.replace('notif', 'd-none');
		}

		/******* PARTIE SOLENE *******/
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
					cart.splice(indexToRemove, 1);

				}
			})

		}

		function decreaseQuantity(refProduct) {

			cart.forEach((item) => {
				if (item[0] == refProduct && item[1] > 1) {
					item[1]--
				}
				else if (item[0] == refProduct && item[1] == 1) {
					removeProductFromCart(refProduct)
				}
			})

		}

		/////////////// ADD FUNCTION TO BUTTON //////////////////
		// add to cart
		let articleContainer = document.querySelector('#articleInCart')
		let addBtn = document.querySelectorAll('.add'); // tous les bouttons add
		for (let i = 0; i < addBtn.length; i++) {
			addBtn[i].addEventListener('click', (event) => {
				itemSelected = [event.target.dataset.id, parseInt(event.target.dataset.qt)];
				addToCart(itemSelected[0]);
				badgeCart();

				articleContainer.innerHTML = 'test';
			})
		}

		// delete all content from cart
		let btnDeleteAll = document.querySelector('#btnDeleteAll')
		btnDeleteAll.addEventListener('click', () => {
			clearCart();
			badgeCart();
			console.log(cart)
		})

		// test : remove one product from cart
		// fonction testée sur le bouton "btnLess" en attendant le bouton pour supprimer complètement
		let btnLess = document.querySelector('#btnLess')
		btnLess.addEventListener("click", (() => {
			removeProductFromCart("6005") // correspond à "La Métamorphose"
			console.log(cart)
		}))

	}) // then


// OPEN MODAL WINDOW //

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
