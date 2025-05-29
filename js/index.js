let mainCardContainer = document.querySelector("#mainCardContainer");

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.slice(0,15).forEach((element) => {
      let card = `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div class="card cardContainer" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="Card Image" id="cardImage">
            <div class="card-body cardContent">
              <h5 class="card-title">${element.category}</h5>
              <p>${element.title}</p>
              <div class="allId">
                <button type="button">Price: $${element.price}</button>
                <button type="button">Rating: ${element.rating.rate}</button>
              </div>
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
      `;
      mainCardContainer.innerHTML += card; 
    });
  });
