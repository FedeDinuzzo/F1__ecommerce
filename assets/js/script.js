//VARIABLES
const iniciarSesion = document.getElementById("iniciarSesion");
const registrarse = document.getElementById("registrarse");
const account = document.getElementById("account");
const modal = document.getElementById("myModal");
const closeModal = document.getElementsByClassName("close")[0];
const cart = document.getElementById("cart");
const addToCart = document.getElementsByClassName('product__cart');
const countArea = document.getElementById("countArea");
//categorias
const pilotos = document.getElementById("pilotos");
const hombre = document.getElementById("hombre");
const mujer = document.getElementById("mujer");
const accesorios = document.getElementById("accesorios");
//equipos
const alfaRomeo = document.getElementById("alfaRomeo");
const alphaTauri = document.getElementById("alphatauri");
const alpine = document.getElementById("alpine");
const astonMartin = document.getElementById("astonMartin");
const ferrari = document.getElementById("ferrari");
const haas = document.getElementById("haas");
const mclaren = document.getElementById("mclaren");
const mercedes = document.getElementById("mercedes");
const redbull = document.getElementById("redbull");
const williams = document.getElementById("williams");
//filtros - se van a modificar los filtros


//MODAL
//Abrir Modal
iniciarSesion.onclick = function() {
    modal.style.display = "block";
}

//Cerrar Moda
closeModal.onclick = function() {
    modal.style.display = "none";
}

//Cerrar Modal desde cualquier lado de la pantalla
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//INICIAR SESION
function guardarDatos(storage) {
    let user = document.getElementById('emailAddress').value;
    let pass = document.getElementById('password').value;
    const usuario = {
        'user': user,
        'pass': pass
    };

    if (storage === "sessionStorage") {
        sessionStorage.setItem("user", JSON.stringify(usuario));
    }
    if (storage === "localStorage") {
        localStorage.setItem("user", JSON.stringify(usuario));
    }
}

function borrarDatos(storage) {
    storage.clear();

}

let recordar = document.getElementById("rememberMe");

btnLogin.addEventListener("click", () => {
    if (recordar.checked) {
        guardarDatos("localStorage");
    } else {
        guardarDatos("sessionStorage");
    }
});

//ARRAY PRODUCTOS
class Producto {
    constructor(type, team, edition, price, img, code) {
        this.type = type;
        this.team = team;
        this.edition = edition;
        this.price = price;
        this.img = img;
        this.code = code;
    }

    mostrarProducto() {
        alert("El producto correspondiente al codigo ingresado es:" + "\n" + "Producto: " + this.type + " " + this.team + "\n" + "edicion: " + this.edition + "\n" + "Precio: $" + this.price);
    }
}

const productos = [];

productos.push(new Producto("Hoodie", "Mercedes Benz", "Chinese New Year Special Edition", 101, "assets/img/Products Preview/1.png", 001));
productos.push(new Producto("T-Shirt", "Red Bull Racing", "2021 Special Edition Mexico GP", 42, "assets/img/Products Preview/2.png", 002));
productos.push(new Producto("Polo", "Aston Martin", "F1 2021 Official Team Polo", 35, "assets/img/Products Preview/3.png", 003));
productos.push(new Producto("Polo", "Williams Racing", "2021 - Navy", 90, "assets/img/Products Preview/4.png", 004));
productos.push(new Producto("Jacket", "Mercedes Benz", "Performance", 180, "assets/img/Products Preview/5.png", 005));
productos.push(new Producto("Polo", "Mercedes Benz", "F1 2021 - Black", 85, "assets/img/Products Preview/6.png", 006));
productos.push(new Producto("Hoodie", "Mclaren", "Essential Logo - Grey", 210, "assets/img/Products Preview/7.png", 007));
productos.push(new Producto("T-Shirt", "Red Bull Racing", "2021 Max Verstappen World Champion", 72, "assets/img/Products Preview/8.png", 008));


//MOSTRAR PRODUCTOS
function showProducts (element){

    for (const producto of element) {
        let div = document.createElement("div");
        div.innerHTML = `<div class="product__card">
                         <button class="product__cart"><img src="assets/img/grocery.svg"></button>
                         <img src="${producto.img}" class="img__card">
                         <h3 class="product__name">${producto.type} / ${producto.team}</h3>
                         <h3 class="product__price">$${producto.price}</h3></div>`;
        document.getElementById("productos").appendChild(div);
    }
}

//UNIDADES SELECCIONADAS CARRITO
let count = localStorage.getItem('cartNumber');
let productsCart = addToCart.length;

for (var i = 0; i < productsCart; i++) {
    addToCart[i].onclick = function () {
    count++
    localStorage.setItem('cartNumber', countArea.textContent = count);
    }
}

if (count > 0) {
    countArea.textContent = count;
}


//PRODUCTS TO CART




//MOSTRAR PRODUCTOS POR EQUIPOS
function showAlfaRomeo() {
    let encontrar = productos.filter(element => element.team === "Alfa Romeo");
    showProducts(encontrar);
}
alfaRomeo.addEventListener('click', showAlfaRomeo);


function showAlpine() {
    let encontrar = productos.filter(element => element.team === "Alpine"); 
    showProducts(encontrar);
}
alpine.addEventListener('click', showAlpine);


function showAstonMartin() {
    let encontrar = productos.filter(element => element.team === "Aston Martin"); 
    showProducts(encontrar);
}
astonMartin.addEventListener('click', showAstonMartin);


function showFerrari() {
    let encontrar = productos.filter(element => element.team === "Ferrari"); 
    showProducts(encontrar);
}
ferrari.addEventListener('click', showFerrari);


function showHaas() {
    let encontrar = productos.filter(element => element.team === "Haas"); 
    showProducts(encontrar);
}
haas.addEventListener('click', showHaas);


function showMlcaren() {
    let encontrar = productos.filter(element => element.team === "Mclaren"); 
    showProducts(encontrar);
}
mclaren.addEventListener('click', showMlcaren);


function showMercedes() {
    let encontrar = productos.filter(element => element.team === "Mercedes Benz"); 
    showProducts(encontrar);
}
mercedes.addEventListener('click', showMercedes);


function showRedbull() {
    let encontrar = productos.filter(element => element.team === "Red Bull Racing"); 
    showProducts(encontrar);
}
redbull.addEventListener('click', showRedbull);


function showWilliams() {
    let encontrar = productos.filter(element => element.team === "Williams Racing"); 
    showProducts(encontrar);
}
williams.addEventListener('click', showWilliams);


//SHOW PRODUCTS BY FILTER

/*
//REGISTRO: simula el ingreso de datos para crearse una cuenta
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let email = prompt("Ingrese su email");
let contraseña = prompt("Elija una constraseña de al menos 6 caracteres");

alert("Bienvenido " +nombre +" tu registro se ha completado existosamente!");
*/


/*
//INICIO SESION: simula el ingreso de datos para iniciar sesion
prompt("Ingrese su email");
prompt("ingrese su constraseña");

alert("Incio de sesion exitoso");
*/


/*
//CATEGORIA PRODUCTO: simula mostrar los productos por su categoria
let tipoProducto = prompt("Ingrese el tipo de producto: ");

const encontrar = productos.filter(element => element.type == tipoProducto);

console.log(encontrar);
*/


/*
//FILTRAR PRODUCTOS: simula un filtro de precio de menor a mayor
console.log(productos.sort((precio1, precio2) => precio1.price - precio2.price));
*/


/*
//ADD TO CART: simula que cuando aprietes el boton de agregar al carrito en el producto, este sea llevado por su codigo y aparezca en carrito.
const codigoProducto = Number(prompt("Ingrese el codigo del producto para agregarlo al carrito: "));
const encontrar = productos.find(element => element.code == codigoProducto);
encontrar.mostrarProducto() 
*/


/*
//VER CARRITO: siumula que cuando abras el carrito desde la nav bar aparezcan los productos que agregaste
const cantidadProductos = Number(prompt("Ingrese la cantidad de productos que tiene en el carrito: "));

if (cantidadProductos == 1) {
    alert("Ingrese el codigo del producto que tenes en el carrito: ");
}else{
alert("Ingrese el codigo de los "+ cantidadProductos +" productos que tenes en el carrito: ");
}

const codigos = [];

for (let i = 0; i < cantidadProductos; i++) {
    codigos.push(Number(prompt("Ingrese codigo del producto: ")));
}

alert("los prodcutos del carrito son: "+codigos);
*/


/*
//PRECIO SUBTOTAL DEL CARRITO: simula calcular el precio subtotal de los productos que estan dentro del carrito.
const precioProductos = Number(prompt("Ingrese la cantidad de productos que tiene en el carrito: "));

if (precioProductos == 1) {
    alert("Ingrese el precio del producto que tenes en el carrito: ");
}else{
alert("Ingrese los precios de los "+ precioProductos +" productos que tenes en el carrito: ");
}

const precio = [], suma = 0;

for (let i = 0; i < precioProductos; i++) {
    precio.push(Number(prompt("Ingrese el precio del producto: ")));
}

let subtotal = precio.reduce((a, b) => a + b, 0);

alert("SUBTOTAL: $"+subtotal);

//PASARELA DE PAGOS: simula calcular el precio final segun la forma de pago
let medioPago = prompt("Ingrese medio de pago (credito, debito, efectivo): ");

const precioFinal =(num) => alert("El monto final a pagar es: "+ (subtotal*num));

if (medioPago === "credito") {
    precioFinal(1.15);
}else if (medioPago === "debito"){
    precioFinal(1.05);
}else if (medioPago === "efectivo"){
    precioFinal(0.9);
}
*/


/*FORMULARIO DE CONTACTO
let nombreCompletoContacto = prompt("Ingrese su nombre y apellido");
let emailContacto = prompt("Ingrese su email");
let consulta = prompt("Ingrese su consulta");

alert("Su consulta ha sido enviada con existo, dentro de las proximas 48hs habiles le contestaremos a su email, Gracias!");
//simula el ingreso de datos para enviar el formulario
*/