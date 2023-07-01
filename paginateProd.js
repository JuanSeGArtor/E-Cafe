const sectionProducts = document.getElementById("section-products");
const productsContainer = document.getElementById("products");
const sectionProductInfo = document.getElementById("product-info");

let products = [];
let productCard;

class Product {
    constructor(id, name, price, img, availableUnits) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = "img/" + img;
        this.availableUnits = availableUnits;
    }
}

// Crear instancias de productos
let coffee = new Product("01", "Cappuchino", 10.99, "products_food_coffee.jpeg", 20)
let cupcake = new Product("02", "Vanilla Cupcake", 3.99, "products_food_cupcake.jpeg", 14)
let cupcake2 = new Product("03", "Chocolate Cupcake", 7.99, "products_food_cupcake2.jpeg", 14)
let cupcake3 = new Product("04", "Cupcake", 7.99, "products_food_cupcake3.jpeg", 14)
let donut = new Product("05", "Donut", 4.99, "products_food_donut.jpeg", 3)
let brownie = new Product("06", "Brownie", 2.99, "products_food_brownie.jpeg", 6)
let cake = new Product("07", "Chocolate Cake", 26.99, "products_food_cake.jpeg", 28)
let cake2 = new Product("08", "Chocolate Cake", 26.99, "products_food_cake2.jpeg", 28)
let mousse = new Product("09", "Mousse", 8.99, "products_food_mousse.jpeg", 23)
let frappuccino = new Product("10", "Frappuccino", 12.99, "products_food_frappuccino.jpeg", 16)
let cookies = new Product("11", "Cookies", 1.49, "products_food_cookies.jpeg", 40)
let cinnamonRoll = new Product("12", "Cinnamon Roll", 14.99, "products_food_cinnamonRoll.jpeg", 26)
let smoothie = new Product("13", "Strawberry Smoothie", 6.99, "products_food_smoothie.jpeg", 12);
let pizza = new Product("14", "Margherita Pizza", 15.99, "products_food_pizza.jpeg", 8);
let sandwich = new Product("15", "Turkey Sandwich", 9.99, "products_food_sandwich.jpeg", 18);
let salad = new Product("16", "Caesar Salad", 7.99, "products_food_salad.jpeg", 15);
let burger = new Product("17", "Cheeseburger", 11.99, "products_food_burger.jpeg", 10);
let sushi = new Product("18", "California Roll", 12.99, "products_food_sushi.jpeg", 20);
let iceCream = new Product("19", "Chocolate Ice Cream", 5.99, "products_food_iceCream.jpeg", 16);
let pasta = new Product("20", "Spaghetti Carbonara", 13.99, "products_food_pasta.jpeg", 9);
let taco = new Product("21", "Taco", 4.99, "products_food_taco.jpeg", 22);
let sushiRoll = new Product("22", "Sushi Roll", 9.99, "products_food_sushiRoll.jpeg", 16);
let smoothieBowl = new Product("23", "Acai Smoothie Bowl", 7.99, "products_food_smoothieBowl.jpeg", 11);
let pizzaSlice = new Product("24", "Pepperoni Pizza Slice", 3.99, "products_food_pizzaSlice.jpeg", 19);
let wrap = new Product("25", "Chicken Caesar Wrap", 8.99, "products_food_wrap.jpeg", 14);
let iceCreamCone = new Product("26", "Vanilla Ice Cream Cone", 4.99, "products_food_iceCreamCone.jpeg", 25);
let burrito = new Product("27", "Chicken Burrito", 9.99, "products_food_burrito.jpeg", 13);
let sushiNigiri = new Product("28", "Sushi Nigiri", 6.99, "products_food_sushiNigiri.jpeg", 17);



// Agregar productos a la lista
products.push(coffee, cupcake, frappuccino, brownie, cake, cupcake2, cupcake3, donut, cake2, cookies, cinnamonRoll, mousse)
products.push(smoothie, pizza, sandwich, salad, burger, sushi, iceCream, pasta);
products.push(taco, sushiRoll, smoothieBowl, pizzaSlice, wrap, iceCreamCone, burrito, sushiNigiri);


const elementosPorPagina = 9; // Número de elementos a mostrar por página
let paginaActual = 1; // Página actual/inicial

// Función para paginar la lista de productos
function paginar(lista, elementosPorPagina, paginaActual) {
    const indiceInicio = (paginaActual - 1) * elementosPorPagina; // Índice de inicio para la página actual
    const indiceFin = indiceInicio + elementosPorPagina; // Índice de fin para la página actual
    return lista.slice(indiceInicio, indiceFin); // Devuelve una porción de la lista correspondiente a la página actual
}

// Cargar los productos en la página
function loadProducts() {
    sectionProductInfo.style.display = "none";
    productsContainer.innerHTML = ""; // Limpiar el contenedor de productos antes de cargar nuevos productos

    const elementosMostrados = paginar(products, elementosPorPagina, paginaActual); // Obtener los productos para la página actual

    // Crear y agregar las tarjetas de productos al contenedor
    elementosMostrados.forEach((product) => {
        productCard = `
        <button class="product-cards">
            <h2>${product.name}</h2>
            <img src="${product.img}" alt="${product.name}">
            <h3>$${product.price}</h3>
        </button>
        `;
        productsContainer.innerHTML += productCard;
    });

    const productCards = document.querySelectorAll(".product-cards");

    // Asignar el evento click a las tarjetas de productos
    for (let i = 0; i < productCards.length; i++) {
        productCards[i].addEventListener("click", () => productInfo(productCards[i]));
    }

    // Agregar controles de paginación
    const totalPages = Math.ceil(products.length / elementosPorPagina); // Calcular el número total de páginas

    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement("button");
        pageNumber.innerText = i;
        pageNumber.addEventListener("click", () => cambiarPagina(i));

        if (i === paginaActual) {
        pageNumber.classList.add("active");
        }

        paginationContainer.appendChild(pageNumber);
    }
}

// Mostrar la información de un producto
function productInfo(product) {
    sectionProducts.style.display = "none";
    sectionProductInfo.style.display = "flex";

    sectionProductInfo.innerHTML = product.innerHTML;
    console.log(product.innerHTML);
}

// Cambiar a una página específica
function cambiarPagina(pagina) {
  paginaActual = pagina; // Actualizar la página actual
  loadProducts(); // Cargar los productos de la página seleccionada
}

window.addEventListener("load", loadProducts);
