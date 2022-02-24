//VARIABLES
const iniciarSesion = document.getElementById("iniciarSesion");
const registrarse = document.getElementById("registrarse");
const account = document.getElementById("account");
const modal = document.getElementById("myModal");
//const closeModal = document.getElementsByClassName("close")[0];
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
const btnLogin = document.getElementById("btnLogin");
//filtros - se van a modificar los filtros





$(() => {
//Animacion Imagen Inicio
$('.hide').show(3000)
.delay(3000)
.fadeOut(3000);

//jquery MODAL

//Abrir Modal
$('#iniciarSesion').on('click', () => {
    $('.modal').css({'display': 'block'});
})

//Cerrar Modal
$('.close').on('click', () => {
    $('.modal').css({'display': 'none'});
})

//Cerrar Modal desde cualquier lado de la pantalla
window.onclick = (e) => {
    if (e.target == modal){
    $('.modal').css({'display': 'none'});
}}

})

//HTML LOGIN


//HTML INICIAR SESION
function showIniciarSesion() {
let div = document.createElement("div");
        div.innerHTML = 
    `<form>
            <div class="form-floating">
                <label for="emailAddress">Dirección de correo</label>
                <input type="email" class="form-control" id="emailAddress" placeholder="nombre@mail.com">
            </div>
            <div class="form-floating">
                <label for="password">Contraseña</label>
                <input type="password" class="form-control" id="password" placeholder="Contraseña">            
            </div>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" id="rememberMe" value="remember-me"> Recordarme en este navegador
                </label>
            </div>
            <button class="button" id="btnLogin" type="submit">Iniciar sesión</button>
        </form>`;
    document.getElementById("modal-body").appendChild(div);
}

iniciarSesion.addEventListener('click', showIniciarSesion);


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

/*btnLogin.addEventListener("click", () => {
    if (recordar.checked) {
        guardarDatos("localStorage");
    } else {
        guardarDatos("sessionStorage");
    }
});*/

//ARRAY PRODUCTOS
class Producto {
    constructor(type, team, edition, price, img, code, category) {
        this.type = type;
        this.team = team;
        this.edition = edition;
        this.price = price;
        this.img = img;
        this.code = code;
        this.category = category;
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
    let encontrar = productos.filter(element => element.team === williams); 
    showProducts(encontrar);
}
williams.addEventListener('click', showWilliams);


//FORMULARIO DE CONTACTO AJAX Jquery - formsubmit API
/*const URLGET = "https://jsonplaceholder.typicode.com/posts"
const nombreCompleto = document.getElementById('nombreCompleto').value;
const email = document.getElementById('email').value;
const consulta = document.getElementById('consulta').value;


$("#formSubmit").click(() => {
    const formulario = {
        'name': nombreCompleto,
        'email': email,
        'consulta': consulta
    }

    $.post(URLGET, formulario,(respuesta, estado) => {
    if(estado === "success") {
        $(".form__button").prepend(
        `<div>
        ${respuesta.nombreCompleto} El formulario ha sido enviado con Exito
        </div>`);
    }
});
});*/

function contactForm(){
const $form = document.querySelector(".contact-form"),
$inputs = document.querySelectorAll(".contact-form [required]");

$inputs.forEach(input => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none")
    input.insertAdjacentElement("afterend", $span);
});

document.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")){
        let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
    
        if(pattern && $input.value !== ""){
            let regex = new RegExp(pattern);
            return !regex.exec($input.value)
                ? document.getElementById($input.name).classList.add("is-active")
                : document.getElementById($input.name).classList.remove("is-active")
        }
    }
});

document.addEventListener("submit", (e) => {
    e.preventDefault();

    const $loader = document.querySelector(".contact-form-loader"),
    $response = document.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/federicodinuzzo98@gmail.com",{
        method: "POST",
        body: new FormData(e.target)
    })
        .then(res => res.ok?res.json():Promise.reject(res))
        .then(json => {
            console.log(json);
            $loader.classList.add("none");
            $response.classList.remove("none");
            $response.innerHTML = `<p class="form__submitted">${json.message}</p>`;
            $form.reset();
        })
        .catch(err => {
            console.log(err);
            let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
            $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        })
        .finally(() => setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
        },3000));
});
}

document.addEventListener("DOMContentLoaded", contactForm);