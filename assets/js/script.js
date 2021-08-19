fetch('books.json')
.then(response => response.json())
.then((jsonBooks) => {
  jsonBooks.results.map((book) => {

    let title = book.original_title;
    let overview = book.overview;
    let poster = book.poster_path;
    let vote = book.vote_average;
  
    
    let bookElToInject = `
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
    </div>
  `;
    document.getElementById('filmTable').innerHTML += bookElToInject;
      
  })
})