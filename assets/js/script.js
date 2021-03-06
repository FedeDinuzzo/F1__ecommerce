//Variables
let CART = "";
let PATH = 'assets/js/products.json';
const modal = document.getElementById("myModal");
const modalBody = document.getElementById("modal-body");
const iniciarSesion = document.getElementById("iniciarSesion");
const registro = document.getElementById("registro");
const contactFormSubmitted = document.getElementById('form');


$(() => {
//Abrir Modal
$('#iniciarSesion, #loginButton, #registro').on('click', () => {
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


//Registro
function showRegistro() {
    let div = document.createElement("div");
            div.innerHTML = 
    `<form action="javascript:register()" class="form-container">
			<input class="form-control" type="text" name="firstName" id="firstName" placeholder="Nombre" required/>
			<input class="form-control" type="text" name="lastName" id="lastName" placeholder="Apellido" required/>
			<input class="form-control" type="email" name="email" id="email" placeholder="Correo electronico" required/>
			<input class="form-control" type="password" name="password" id="password" placeholder="Contraseña" required/>
			<button type="submit" class="button modal__button">Crear cuenta</button>
	</form>`
    modalBody.appendChild(div);

    function removeR() {
        modalBody.removeChild(div);
    }

    registro.addEventListener('click', removeR);  
}

registro.addEventListener('click', showRegistro);


//Iniciar Sesion
function showIniciarSesion() {
let div = document.createElement("div");
        div.innerHTML = 

		`<form action="javascript:login()">
            <div class="form-floating">
				<input class="form-control" type="email" name="loginEmail" id="loginEmail" placeholder="Correo electronico" required />
            </div>
            <div class="form-floating">
				<input class="form-control" type="password" name="loginPassword" id="loginPassword" placeholder="Constraseña" required />
            </div>	
                <button type="submit" class="button modal__button">Iniciar sesión</button>
				
		</form>`;

        modalBody.appendChild(div);

    function remove() {
        modalBody.removeChild(div);
    }

    iniciarSesion.addEventListener('click', remove);  
}

iniciarSesion.addEventListener('click', showIniciarSesion);


//Verificación de usuario
function getUser() {
	if(sessionStorage.getItem('isAuthenticated')) {
		//Contador del carrito
		let count = 0;
		let currUserId = sessionStorage.getItem('currUserId');
		let currentUserCartKey = 'cart_' + currUserId;
		count = JSON.parse(localStorage.getItem(currentUserCartKey || "[]")).length;
		document.getElementById('basket').innerHTML = count;
		document.getElementById('loginButton').style.display = 'none';
		document.getElementById('cartButton').innerHTML = '<img class="nav__img" src="./assets/img/grocery.svg">';
	} else {
		document.getElementById('cartButton').innerHTML = '<img class="nav__img" src="./assets/img/grocery.svg">';
		document.getElementById('logoutButton').style.display = 'none';
		document.getElementById('basket-container').style.display = 'none';
		loadJSON(PATH);
	};
	//Traer todos los productos a la Pagina Princiapl
	getAll();
} 


//Obtención de datos (products.json), y guardado en LocalStorage
function loadJSON(PATH) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				let data = JSON.parse(xhr.responseText);
				localStorage.setItem('products', JSON.stringify(data));
			} else {
				window.alert('Algo salió mal al Buscar!');
			}
		}
	};
	xhr.open('GET', PATH, true);
	xhr.send();
}


//Ingresar a pagina cart
function getCart() {
	if(sessionStorage.getItem('isAuthenticated')) {
		window.location = '../cart.html'
	} else {
		alert("Debes Iniciar Sesion para utilizar el Carrito");
		window.location = './index.html';
	}
}


//Mostrar productos por categorias
function getAll() {
	renderProducts();
}

function getMobiles() {
	renderProducts('Polo');
}

function getLaptops() {
	renderProducts('Hoodie');
}

//Mostrar productos por equipos
function getAlfaRomeo() {
	renderProducts('Alfa Romeo');
}

function getAlphaTauri() {
	renderProducts('Alpha Tauri');
}

function getgetAlpine() {
	renderProducts('Alpine');
}

function getAstonMartin() {
	renderProducts('Aston Martin');
}

function getFerrari() {
	renderProducts('Ferrari');
}

function getHaas() {
	renderProducts('Haas');
}

function getMclaren() {
	renderProducts('Mclaren');
}

function getMercedes() {
	renderProducts('Mercedes Benz');
}

function getRedbull() {
	renderProducts('Red Bull');
}

function getWilliams() {
	renderProducts('Williams Racing');
}


//Eenderizar productos basados ​​en las categorías dadas
function renderProducts(filter) {
	let productContainer = document.getElementById('product-container');
	productContainer.innerHTML = "";
	let data = JSON.parse(localStorage.getItem('products'));
	data.forEach(item => {
		if(filter) {
			if(item.category === filter) {
				productContainer.innerHTML += `
				<div class="product__card">
					<form action="javascript:addToCart('${item.id}')" class="cart-btn">
						<button class="product__cart" id="add-to-cart" type="submit"><img src="assets/img/grocery.svg"></button>
					</form>	
					<img src="${item.imageURL}" class="img__card">
					<h3 class="product__name">${item.category} / ${item.team}</h3>
					<h3 class="product__price">$${item.price}</h3></div>
				</div>`;
			} if(item.team === filter) {
				productContainer.innerHTML += `
				<div class="product__card">
					<form action="javascript:addToCart('${item.id}')" class="cart-btn">
						<button class="product__cart" id="add-to-cart" type="submit"><img src="assets/img/grocery.svg"></button>
					</form>	
					<img src="${item.imageURL}" class="img__card">
					<h3 class="product__name">${item.category} / ${item.team}</h3>
					<h3 class="product__price">$${item.price}</h3></div>
				</div>`;
			}  
		} else {
			productContainer.innerHTML += `
			<div class="product__card">
			    <form action="javascript:addToCart('${item.id}')" class="cart-btn">
                    <button class="product__cart" id="add-to-cart" type="submit"><img src="assets/img/grocery.svg"></button>
				</form>	
                <img src="${item.imageURL}" class="img__card">
                <h3 class="product__name">${item.category} / ${item.team}</h3>
                <h3 class="product__price">$${item.price}</h3></div>
			</div>`;
		} 
	});
}


//Agregar el artículo con el id del producto al carrito del usuario actual
function addToCart(prodId) {
	if(sessionStorage.getItem('isAuthenticated')) {
		let currUserId = sessionStorage.getItem('currUserId');
		let currentUserCartKey = 'cart_' + currUserId;
		CART = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
		let isAlreadyInCart = CART.some(item => item.id === prodId);
		if(isAlreadyInCart) {
			CART.forEach(item => {
				if(item.id === prodId) {
					item.count++;
				}
			})
		} else {
			CART.push({"id":prodId,"count":1});
		}
		localStorage.setItem(currentUserCartKey, JSON.stringify(CART));
		window.location.reload();
		window.location.href="index.html #tienda".reload();
	} else {
		window.alert("Primero debes Iniciar Sesion.")
	}
}


//Formulario de contacto - formsubmit API
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

contactFormSubmitted.addEventListener("submit", (e) => {
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


//Cerrar sesión
function logout() {
	sessionStorage.clear();
	window.location = '../../index.html'
}