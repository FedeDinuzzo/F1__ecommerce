function renderCheckout() {
	let data = JSON.parse(localStorage.getItem('products'));
	let currUserId = sessionStorage.getItem('currUserId');
	let currentUserCartKey = 'cart_' + currUserId;
	let cart = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
	if(cart.length > 0) {
		let cartArr = cart.map(item => {
			for(let i = 0; i < data.length; i++) {
				if(data[i].id === item.id) {
					return {...data[i], quantity:item.count}
				}
			}
		});
		let checkout = document.getElementById('checkout__view');
		checkout.innerHTML = "";
		let total = 0;
		cartArr.forEach((item) => {
			total += (+item.quantity * +item.price);
			checkout.innerHTML += 
			`<div class="checkout__product">
			    <div class="checkout__item"><img src="${item.imageURL}" class="checkout__img"></div>
				<div class="checkout__item">${item.name}</div>
				<div class="checkout__item">$${item.price}</div>
				<div class="checkout__item">${item.quantity}</div>
				<div class="checkout__item">$${+item.quantity * +item.price}</div>
			</tr>`;
		});
		document.getElementById('total').innerHTML = total;
	} else {
		document.getElementById('confirmPurchase').style.display = 'none';
	}


}
function confirmPurchase() {
	let currUserId = sessionStorage.getItem('currUserId');
	let currentUserCartKey = 'cart_' + currUserId;
	localStorage.setItem(currentUserCartKey, JSON.stringify([]));
	window.alert('Compra realizada con exito!');
	window.location = './index.html';
}
