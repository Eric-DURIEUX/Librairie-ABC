console.log("test")

/////////////////////  ///////////////////////
fetch('assets/js/books.json')
.then(response => response.json())
.then((jsonBooks) => {
	// récupération des UL du HTML
	let litteratureList = document.querySelector("#litterature");
	let policierList = document.querySelector("#thriller");
	let jeunesseList = document.querySelector("#youth");
	let histoireList = document.querySelector("#history");
	let scienceList = document.querySelector("#science");

	// récupération des données JSON
	let histoireData = jsonBooks.histoire;
	let litteratureData = jsonBooks.litterature;
	let scienceData = jsonBooks.science;
	let policierData = jsonBooks.policier;
	let jeunesseData = jsonBooks.jeunesse;

	let ulContent = (bookData, bookList) =>{
	  	bookData.map((book) => {

		  	let title = book.original_title;
		  	let author = book.author;
		  	let overview = book.overview;
		  	let poster = book.poster_path;
		  	let price = book.price;
		  	
		  	let bookElToInject = `
		  	<div class='col-12 col-sm-6 col-xl-4 mb-3'>
		  	  <div class='row no-gutters'>
		  		<div class="col-12 text-end"><button class='add'><img src="assets/img/bag-plus.svg" alt="Logo ajouter au panier"></button></div>
		  	    <div class='col-md-5'>
		  	      <img class='img-fluid' src='${poster}' />
		  	    </div>
		  	    <div class='col-md-7 pl-2'>
		  	      <h5 class="pt-3 pt-md-0">${title}</h5>
		  	      <h4 class="pt-3 pt-md-0">${author}</h4>
		  	      <p id='synopsis'>${overview}</p>
		  	      <p>${price}</p>
		  	    </div>
		  	  </div>
		  	</div>`;

		bookList.innerHTML += bookElToInject;

  		})// map

	} // function

	ulContent(litteratureData, litteratureList)
	ulContent(policierData, policierList)
	ulContent(histoireData, histoireList)
	ulContent(jeunesseData, jeunesseList)
	ulContent(scienceData, scienceList)

	let addBtn = $('.add');
	console.log(addBtn)
	addBtn.on('click', ()=>{
		
		// ouvre le 

	}) // ADD event
}) // then
