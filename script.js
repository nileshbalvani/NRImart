const categories = [
    "Dairy", "Bakery", "Snacks", "Beverages", "Fruits", "Vegetables", 
    "Household", "Personal Care", "Frozen Food", "Instant Food"
];

const products = [
    { name: "Milk", category: "Dairy", image: "images/milk.jpg", price: "₹50" },
    { name: "Bread", category: "Bakery", image: "images/bread.jpg", price: "₹30" },
    { name: "Chips", category: "Snacks", image: "images/chips.jpg", price: "₹20" },
    { name: "Coke", category: "Beverages", image: "images/coke.jpg", price: "₹40" },
    { name: "Apple", category: "Fruits", image: "images/apple.jpg", price: "₹80/kg" },
    { name: "Potato", category: "Vegetables", image: "images/potato.jpg", price: "₹20/kg" }
];

document.addEventListener("DOMContentLoaded", function() {
    const categoryList = document.getElementById("category-list");
    const productContainer = document.getElementById("product-container");

    // Add categories to nav bar
    categories.forEach(category => {
        let li = document.createElement("li");
        li.textContent = category;
        li.onclick = () => filterProducts(category);
        categoryList.appendChild(li);
    });

    // Display all products initially
    displayProducts(products);
});

function displayProducts(productArray) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; 

    productArray.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        productContainer.appendChild(productDiv);
    });
}

function filterProducts(category) {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
}
