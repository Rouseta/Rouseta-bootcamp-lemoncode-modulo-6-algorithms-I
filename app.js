const LOWER_TYPE = 21;
const REGULAR_TYPE = 4;
const EXEMPT_TYPE = 0;
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

var main = document.getElementById("main");
let subtotal = document.getElementById("subtotal")
let totalPrice = 0;

const renderProductList = () => {
    for (let element of products) {
        let container = document.createElement("div");
        main.appendChild(container)
        let descriptionElement = document.createElement("ol");
        descriptionElement.textContent = `${element.description} ${element.price} euros`
        container.appendChild(descriptionElement);
        container.classList.add("container");
        var input = document.createElement("input");
        input.setAttribute("class", "product-unit");
        input.setAttribute("type", "number");
        input.setAttribute("value", 0);
        input.addEventListener("change", event => {
            element.units = Number(event.target.value)

        })
        container.appendChild(input);
    }
}




// Cálculo de factura
//Precio total = precio unitario * unidades
// const CalculateTotalPrice = () => {
//     const units = document.getElementsByClassName("product-unit")


//     for (let element of units) {

//         unitPrice = Number(element.price)
//         totalPrice += unitPrice * Number(element.value)
//         console.log(element)


//     }

//     return subtotal.innerHTML = `<p>${totalPrice}</p>`;
// }
renderProductList()

const calculateTotalPrice = () => {
    for (let i = 0; i < products.length; i++) {
        const units = Number(products[i].units);
        const productPrice = Number(products[i].price);
        totalPrice += productPrice * units;
    }
    console.log(products)
    return subtotal.innerHTML = `<p>${totalPrice.toFixed(2)}</p>`;
}
const calculateIVA = () => {

}




const button = document.getElementById("btnCalculate")
button.addEventListener("click", calculateTotalPrice)