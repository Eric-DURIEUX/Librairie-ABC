console.log("test")

/////////////////////  ///////////////////////
fetch('assets/js/books.json')
.then(response => response.json())
.then((jsonBooks) => {

	// récupération des UL du HTML
	let literatureList = $('#literature');
	let thrillerList = $('#thriller');
	let youthList = $('#youth');
	let historyList = $('#history');
	let scienceList = $('#science');

	let histoireData = jsonBooks.histoire;
	let littératureData = jsonBooks.littérature;
	let scienceData = jsonBooks.science;
	let policierData = jsonBooks.policier;
	let jeunesseData = jsonBooks.jeunesse;

	console.log(historyData);
	// document.getElementById('filmTable').innerHTML += bookElToInject;

	let ulContent = (bookContent, bookList) =>{
	  	bookContent.map((book) => {
	  		console.log(jsonBooks.Histoire)

		  	let title = book.original_title;
		  	let author = book.author;
		  	let overview = book.overview;
		  	let poster = book.poster_path;
		  	let price = book.price;
		  	
		  	bookList += `
		  	<div class='col-12 col-sm-6 col-xl-4 mb-3'>
		  	  <div class='row no-gutters'>
		  	    <div class='col-md-5'>
		  	      <img class='img-fluid' src='${poster}' />
		  	    </div>
		  	    <div class='col-md-7 pl-2'>
		  	      <h5 class="pt-3 pt-md-0">${title}</h5>
		  	      <h4 class="pt-3 pt-md-0">${author}</h4>
		  	      <p class='text'>${overview}</p>
		  	      <p>${price}</p>
		  	    </div>
		  	  </div>
		  	</div>`;
  		})// map
	} // function

	// ulcontent()

}) // then
