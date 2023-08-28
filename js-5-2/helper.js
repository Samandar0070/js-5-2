function findElement(element, parent = document) {
    return document.querySelector(element);
}

let elCards = findElement(".cards")
const elSearchInput = findElement("#search-input");
const elSearchBtn = findElement("#search-btn");

function renderProducts(masha,ayiq) {
    ayiq.innerHTML = "";

    masha.forEach((element) => {
        let newCard = document.createElement("div")
        newCard.className = "card"
        newCard.style.width = "18rem"

        newCard.innerHTML = `
            <img class="card-img-top" src="${element.image}" alt="${element.title}"/>
            <svg  data-v-b3e9397c="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" alt="like" class="ui-icon  position-absolute end-0 m-3">
                <path data-id="${element.id}" class="like-path" d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z" fill="${element.isFavorite ? "#8967F0" :  "white" }" fill-opacity="0.8"></path>
                <path data-id="${element.id}" class="like-path" d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z" fill="${element.isFavorite ? "none" :  "#15151A" }"></path>                
            </svg>
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <div class="d-flex">
                    <img data-v-f4d56a28="" src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e" class="noselect rating-icon" data-test-id="icon__rating-star" style="width: 14px;">
                    <p class="card-text">${element.rating.rate} (${element.rating.count} baho)</p>
                </div>
                <p class="card-text">$${element.price}</p>
            </div>
        `
        ayiq.appendChild(newCard)
    });
}

elSearchBtn.addEventListener("click", (evt) => {

    const newArray = []
    products.forEach((product) => {
        if (product.title.toLowerCase().includes(elSearchInput.value.toLowerCase())) {
            newArray.push(product)
            
        }
    });

    renderProducts(newArray,elCards)
});