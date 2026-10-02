var productCards = [
    {
        prodtitle: "Hazelnut Royale",
        prodDesc: "White chocolate, hazelnut swirls, and a creamy hazelnut-filled center. Your hazelnut obsession just got a donut.",
        prodImg: "./images/1.jpg"
    },
    {
        prodtitle: "Lotus Crunch",
        prodDesc: "A rich Lotus spread donut topped with the iconic Lotus biscuit crunch for the perfect caramelized bite.",
        prodImg: "./images/2.jpg"
    },
    {
        prodtitle: "Pistachio Chocolate",
        prodDesc: "Smooth pistachio glaze finished with rich chocolate drizzles for a perfectly indulgent treat.",
        prodImg: "./images/3.jpg"
    }
]

function showCards() {
    var cards = document.querySelector(".products-cards");

    for (var i=0; i < productCards.length; i++) {
        cards.innerHTML += `
            <div class="product-card">
                    <div class="img-wrapper">
                        <img src="${productCards[i].prodImg}" alt="${productCards[i].prodtitle}">
                    </div>
                    <div class="body">
                        <h3>${productCards[i].prodtitle}</h3>
                        <p>${productCards[i].prodDesc}</p>
                        <button onclick="addToStorage(${i})">Add to Cart</button>
                    </div>
                </div>
        `
    }
}

showCards();

function addToStorage(i) {
    var prodInfo = productCards[i]
    var getArr = JSON.parse(localStorage.getItem("products"))
    if(!getArr){
        localStorage.setItem("products", JSON.stringify([prodInfo]));
    }
    else{
        
        getArr.push(prodInfo)
        localStorage.setItem("products", JSON.stringify(getArr));
    }
}