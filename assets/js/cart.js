function renderCart() {
	console.log("cart-called");
	let cartContainer = document.getElementById('product-container');
	cartContainer.innerHTML = "";
	let data = JSON.parse(localStorage.getItem('products'));
	if(sessionStorage.getItem('isAuthenticated')) {
		let currUserId = sessionStorage.getItem('currUserId');
		let currentUserCartKey = 'cart_' + currUserId;
		let cart = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
		let cartArr = cart.map(item => {
			for(let i = 0; i < data.length; i++) {
				if(data[i].id === item.id) {
					return {...data[i], quantity:item.count}
				}
			}
		});
		cartArr.forEach( (item, index) => {
			cartContainer.innerHTML += `
		    <div class="cart__product">
			    <div class="cart__product__img">
			    	<img src="${item.imageURL}" alt="prod-image">
			    </div>
			    <div class="cart__product__data" >
				    <h2 id="cart__product__title">${item.name}</h2>
				    <h2 id="cart__product__price">$${item.price}</h2>
				    <span class="edit__quant">
					    <button class="edit__count__btn" onClick="removeByOne('${index}')"><img src="assets/img/remove.svg"></button>
				        <input type="text" name="quantity" id="quantity" class="quant__input" value="${item.quantity}" readonly>
					    <button class="edit__count__btn" onClick="addByOne('${index}')"><img src="assets/img/add.svg"></button>
					</span>
			    </div>
			    <form action="javascript:removeFromCart('${index}')" class="remove__cart">
				    <button id="remove-from-cart" type="submit"><img src="assets/img/delete.svg"></button>
			    </form>
		    </div>`;
		})
	}
	else {
		alert("Debes iniciar sesion!");
		window.location = "index.html"
	}

}

function removeByOne(index) {
	let currUserId = sessionStorage.getItem('currUserId');
	let currentUserCartKey = 'cart_' + currUserId;
	let cart = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
	console.log(cart[+index]);
	if(cart[+index].count === 1) {
		cart.splice(index, 1);
	} else {
		cart[+index].count--;
	}
	localStorage.setItem(currentUserCartKey, JSON.stringify(cart));
	window.location.reload();
}

function addByOne(index) {
	let currUserId = sessionStorage.getItem('currUserId');
	let currentUserCartKey = 'cart_' + currUserId;
	let cart = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
	cart[+index].count++;
	localStorage.setItem(currentUserCartKey, JSON.stringify(cart));
	window.location.reload();
}

function removeFromCart(index) {
	console.log(index);
	console.log('removed from cart');
	let currUserId = sessionStorage.getItem('currUserId');
	let currentUserCartKey = 'cart_' + currUserId;
	let cart = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
	cart.splice(index, 1);
	localStorage.setItem(currentUserCartKey, JSON.stringify(cart));
	window.location.reload();
}
