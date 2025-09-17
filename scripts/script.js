const cartItems = []//item list 
let index = 0;
// loading all plants 

function loadPlant() {
    spin(true)
    const url = 'https://openapi.programming-hero.com/api/plants'
    fetch(url)
        .then(response => response.json())
        .then(allPlant => displayAllPlants(allPlant.plants))
}
loadPlant();

const displayAllPlants = (allPlant) => {
    const PlantCardContainer = document.getElementById("plant-card-container");
    PlantCardContainer.innerHTML = '';
    //create card
    allPlant.forEach(plant => {
        const newPlantCard = document.createElement('div');
        newPlantCard.innerHTML = `
        
        <div class="tree-card w-full shadow-xl lg:max-w-[350px] space-y-2 p-5 bg-white rounded-lg">
                    <div class="img w-[260px] h-[150px] max-sm:w-[90vw] max-sm:mx-auto">
                        <img class="w-[260px] h-[150px]" src="${plant.image}" alt="">
                    </div>
                    <h1 class="text-xl font-bold" onclick="loadModal(${plant.id})" >${plant.name}</h1>
                    <p class="text-xs font-semibold text-gray-500">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="level-type bg-[#DCFCE7] w-[100px] flex justify-center items-center rounded-3xl p-1">
                            <p class="text-sm">${plant.category}</p>
                        </div>
                        <div class="price-tag">
                            <p>৳ <span>${plant.price}</span></p>
                        </div>
                    </div>
                    <button class="add-to-cart w-[100%] bg-[#15803D] px-10 py-3 rounded-3xl text-white btn-hover" onclick="addToCart(${plant.price},'${plant.name}',${plant.id})" >
                        Add to Cart
                    </button>
                </div>
        
        `
        PlantCardContainer.appendChild(newPlantCard);
    });
    spin(false)

}
// Load catagory
function LoadCatagory() {
    spin(true)
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
        .then(res => res.json())
        .then(allCategory => displayCatagory(allCategory.categories));
}
LoadCatagory();

const displayCatagory = (allCategory) => {
    const CatagoryContainer = document.getElementById('tree-catagory-container');
    allCategory.forEach(category => {
        const newCategory = document.createElement("div");
        newCategory.innerHTML = `
        <div  onclick="activeAndLoadCatagory(${category.id})" class="catagory w-full h-[35px] flex flex-col gap-[16px]">
            <button id="btn-category-${category.id}" class="btn bg-[#F0FDF4] hover:bg-[#2fc35b80] w-full h-[35px] btn-category ">
                ${category.category_name}
            </button>
        </div>
    `;
        CatagoryContainer.appendChild(newCategory);

    })
    spin(false);
}

//load category tree card 
function loadCategoryTree(id) {
    spin(true)
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(category => displayCatagorizedTree(category.plants))
}

const displayCatagorizedTree = (plants) => {
    const PlantCardContainer = document.getElementById("plant-card-container");
    PlantCardContainer.innerHTML = '';
    for (let i = 0; i < plants.length; i++) {
        // console.log(plants[i])
        const plant = plants[i];
        const newPlantCard = document.createElement('div');
        newPlantCard.innerHTML = `
        
        <div class="tree-card w-full max-w-[300px] space-y-2 p-5 bg-white rounded-lg">
                    <div class="img w-[260px] h-[150px] max-sm:w-[90vw] max-sm:mx-auto">
                        <img class="w-[260px] h-[150px]" src="${plant.image}" alt="">
                    </div>
                    <h1 class="text-xl font-bold" onclick="loadModal(${plant.id})" >${plant.name}</h1>
                    <p class="text-xs font-semibold text-gray-500">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="level-type bg-[#DCFCE7] w-[100px] flex justify-center items-center rounded-3xl p-1">
                            <p class="text-sm">${plant.category}</p>
                        </div>
                        <div class="price-tag">
                            <p>৳ <span>${plant.price}</span></p>
                        </div>
                    </div>
                    <button onclick="addToCart(${plant.price},'${plant.name}',${plant.id})" class="add-to-cart w-[100%] bg-[#15803D] px-10 py-3 rounded-3xl text-white btn-hover">
                        Add to Cart
                    </button>
                </div>
        
        `
        PlantCardContainer.appendChild(newPlantCard);
    };

    spin(false)


}

//All btn click 
function displayAll() {
    spin(true);
    loadPlant();
    displayAllPlants();
    activebtn()
    spin(false)
}

//modal lead
function loadModal(id) {
    spin(true)
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(detail => displayModal(detail.plants));
}

const displayModal = (detail) => {
    console.log(detail)
    const modalBoxContainer = document.getElementById('details-container');
    modalBoxContainer.innerHTML = `
    
    <div class="p-5 shadow-xl space-y-3 w-[90vw] lg:w-[450px] flex flex-col rounded-xl">
        <h1 class="text-2xl font-bold ">${detail.name}</h1>
        <img class="w-[100%] h-[200px] lg:h-[250px] rounded-lg" src="${detail.image}" alt="">
        <p><span class="font-bold text-xl">Category: </span> <span class="text-gray-400 font-semibold">${detail.category}</span></p>
        <p><span class="font-bold text-xl">Price: </span> <span class="text-gray-400 font-semibold">৳ <span>${detail.price}</span></span></p>
        <p><span class="font-bold text-xl">Description: </span> <span class="text-gray-400 font-semibold">${detail.description}</span></p>
    </div>
    
    `
    my_modal.showModal();
    spin(false)
}

//spinner functon
function spin(status) {
    if (status) {
        document.getElementById("spin").classList.remove("hidden");
        document.getElementById("tree-catagory-container").classList.add("hidden")
        document.getElementById("plant-card-container-wrapper").classList.add("hidden")
        document.getElementById("cartfull").classList.add("hidden")
    }
    else {
        document.getElementById("tree-catagory-container").classList.remove("hidden")
        document.getElementById("plant-card-container-wrapper").classList.remove("hidden")
        document.getElementById("cartfull").classList.remove("hidden")
        document.getElementById("spin").classList.add("hidden");
    }
}

const activeAndLoadCatagory = (id) => {
    activebtn(id);
    if (id === 'all') {
        loadPlant().then(plants => displayAllPlants(plants));
    } else {
        loadCategoryTree(id);
    }
}

//active card button
function activebtn(id = 'all') {
    const allCatBtn = document.getElementsByClassName("btn-category");
    for (const btn of allCatBtn) {
        btn.classList.remove("active");
    }
    const target = document.getElementById(`btn-category-${id}`);
    if (target) {
        target.classList.add("active");
        console.log(`btn-category-${id}`);
    } else {
        console.warn(`Not found: btn-category-${id}`);
    }

}

function addToCart(price, name, id) {
    const cartContainer = document.getElementById('cart-item');
    index++;

    const cartItem = {
        name: name,
        price: price,
        id: id,
        index: index
    };
    cartItems.push(cartItem);

    const item = document.createElement('div');
    item.className = "bg-[#F0FDF4] w-[90%] rounded-xl p-3";
    item.setAttribute("id", `listed-item-${index}`);
    item.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h1 class="font-bold text-xl">${name}</h1>
                <p class="text-gray-500">৳ <span>${price}</span> x 1</p>
            </div>
            <div>
                <button class="text-xl text-red-700 btn-hover" onclick="remove(${index}, ${price})">X</button>
            </div>
        </div>
    `;
    cartContainer.appendChild(item);

    updateTotal(price);
}

//add to cart button 
// function addToCart(price, name, id) {
//     const cartContainer = document.getElementById('cart-item');
//     index++;
//     //making an object for history
//     const cartItem = {
//         name: name,
//         price: price,
//         id: id,
//         index: index
//     }
//     cartItems.push(cartItem);
//         const item = document.createElement('div');
//         item.className = "bg-[#F0FDF4] w-[90%] rounded-xl p-3"
//         item.setAttribute("id", `listed-item-${index}`);
//         item.innerHTML = `
    
//     <div class="flex justify-between items-center">
//         <div>
//             <h1 class="font-bold text-xl">${name}</h1>
//             <p class="text-gray-500">৳ <span>${price}</span> x 1</p>
//         </div>
//         <div>
//             <button id="remove" class="text-xl text-red-700 btn-hover" onclick="remove(${cartItem})">X</button>
//         </div>
//     </div>

//     `;
//         cartContainer.appendChild(item);
//     total(price);


// }
//cross button for remove from cart
// const remove = (item) => {
//     const removed = document.getElementById(`listed-item-${item.index}`)
//     removed.innerHTML = '';
//     removed.innerText = '';
//     total(item.price);
// }

function remove(itemIndex, price) {
    const removed = document.getElementById(`listed-item-${itemIndex}`);
    if (removed) {
        removed.remove();
    }
    updateTotal(-price); // subtract price
}
//total price 
// const total = (price) => {
//     let totalPrice;
//     const div = document.getElementById('total');
//     div.classList.remove('hidden')
//     money = parseInt(document.getElementById("money").innerText);
//     if (price > 0) {
//         totalPrice = money + price;
//         document.getElementById("money").innerText = totalPrice;
//     }
//     else {
//         totalPrice = money - price;
//         document.getElementById("money").innerText = totalPrice;
//     }

// }

function updateTotal(priceChange) {
    const div = document.getElementById('total');
    div.classList.remove('hidden');

    let money = parseInt(document.getElementById("money").innerText);
    let totalPrice = money + priceChange;
    if (totalPrice < 0) totalPrice = 0;

    document.getElementById("money").innerText = totalPrice;
}
