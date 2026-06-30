const motorcycles = [
    {
        name:"Safari Rider 150",
        price:1,
        image:"img/harley-davidson-eeTJKC_wz34-unsplash.jpg"
    },
    {
        name:"Nairobi Street 200",
        price:245000,
        image:"img/andrew-pons-cLHPacdtpSY-unsplash.jpg"
    },
    {
        name:"Mt Kenya Explorer 250",
        price:320000,
        image:"img/daniel-thurler-YRGsG4oiNIg-unsplash.jpg"
    },
    {
        name:"Coastal Breeze 180",
        price:210000,
        image:"img/fabio-spinelli-cPpmFa1OiGU-unsplash.jpg"
    },
    {
        name:"Lake Rider 220",
        price:275000,
        image:"img/flavien-jR61OkxAVtM-unsplash.jpg"
    },
    {
        name:"Mara Thunder 300",
        price:390000,
        image:"img/gijs-coolen--5rcxih1e44-unsplash (1).jpg"
    },
    {
        name:"Equator GT 350",
        price:460000,
        image:"img/kirill-petropavlov-f_gCjlNcVWo-unsplash.jpg"
    },
    {
        name:"Highland Sport 400",
        price:520000,
        image:"img/max-itin-xlhl7rI2M4I-unsplash.jpg"
    },
    {
        name:"Rift Valley Cruiser",
        price:450000,
        image:"img/tim-meyer-2LTMNCN4nEg-unsplash (1).jpg"
    },
    {
        name:"Savannah X500",
        price:680000,
        image:"img/volkan-olmez-SvMlXH_eW6o-unsplash.jpg"
    }
];

// ADD TO CART
function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let bike = motorcycles.find(b => b.name === name);

    let existing = cart.find(item => item.name === name);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            name: bike.name,
            price: bike.price,
            image: bike.image,
            quantity: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

}

// RENDER PRODUCTS WITH IMAGES
const container = document.getElementById("products");

if(container){

    motorcycles.forEach(bike => {

        container.innerHTML += `
            <div class="card">
                <img src="${bike.image}" alt="${bike.name}">
                <div class="card-content">
                    <h3>${bike.name}</h3>
                    <p class="price">KSh ${bike.price.toLocaleString()}</p>
                    <button onclick="addToCart('${bike.name}', ${bike.price})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    });
}
