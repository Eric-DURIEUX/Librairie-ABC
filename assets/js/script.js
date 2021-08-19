/////////////////////  ///////////////////////
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
	let ulContent = (bookData, bookList) =>{
	  	bookData.map((book) => {

		  	let title = book.original_title;
		  	let id = book.id;
		  	let author = book.author;
		  	let overview = book.overview;
		  	let poster = book.poster_path;
		  	let price = book.price;
		  	
		  	// items à ajouter
		  	let bookElToInject = `
		  	<div id="${id}" class='col-12 col-sm-6 col-xl-4 mb-3'>
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

	let addBtn = document.querySelectorAll('.add'); // tous les bouttons add
	let testUl = document.querySelector("#testUl"); // test

	// let cart = [["6001", 2]]; // tableau ["6002", 1], ["4007", 1] contenant les produits ajoutés
	let cart = []; // tableau contenant les produits ajoutés
	let itemSelected = []; // tableau contenant ID et QT du produit choisi

	// FONCTION AJOUTER AU PANIER//
	let addToCart = ((ref) => {
		let pushInCart = true; // déclare à true, sinon undefined

		// forEach sur cart, si 1er élément de chaque item de cart = ref, pushToCart = false.
		cart.forEach((item)=> {
			if (item[0] == ref){
				pushInCart = false;
				// increaseQuantity()
				item[1]++;
				console.log(ref, item[0], 'D');
			}
		})

		// Si pushInCart est resté à true, pousse les données Cart[]
		if (pushInCart) {
			cart.push(itemSelected);
			console.log(ref,  'A')
		}

		console.log(cart)
	}); // addToCart


	for (let i = 0; i < addBtn.length; i++) {
		addBtn[i].addEventListener('click', (event)=>{
			itemSelected = [event.target.dataset.id, parseInt(event.target.dataset.qt)];
			addToCart(itemSelected[0]);
		})
	}

}) // then
 
