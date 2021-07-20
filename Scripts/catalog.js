'use strict'
export class List {
	constructor(url, container, cartUrl) {
		this.container = container;
		this.url = url;
		this.cartUrl = cartUrl;
		this.goods = [];
		this.cartArr = [];
		this.renderList(this.container);
	}
	getGoods(url) {
		return fetch(url)
			.then(result => result.json());
	}

	renderLayout(item) {
		return `<figure class="fetured_block" data-id="${item.id}"> 
		                 <div class= "fetured_blok_hover">
		                     <button class="hover_button"
		                     data-id = "${item.id}"
		                     data-title = "${item.title}"
		                     data-price = "${item.price}"
		                     data-valuta = "${item.valuta}"
		                     data-img_src = "${item.img_src}"
												 data-quantity = "${item.quantity}">
		                     <img class="cart_small" src="img/cart_small.png" alt="">Add to Cart</button>
		                 </div>
		             <img src="${item.img_src}" alt="img" class="fetured_img">
		             <p class="fetured_text-1">${item.title}</p>
		             <p class="fetured_text-2">${item.description}</p>
		             <p class="fetured_text-3">${item.valuta} ${item.price}</p>
		             </figure>`
	}

	renderList() {
		this.getGoods(this.url)
			.then(data => {
				this.goods = [...data];
				for (let el of this.goods) {
					document.querySelector(this.container).insertAdjacentHTML('beforeend', this.renderLayout(el));
				}
			})
			.then (data => this.addToCart(data))
	}

	addToCart () {
		const addBtn = document.querySelectorAll('.hover_button');
		addBtn.forEach(element => {
			element.addEventListener ('click', () => {
				let findEl = this.cartArr.find(cartArrEl => cartArrEl.id === element.getAttribute('data-id'));
				if (findEl){
					findEl.quantity ++;
					console.log(this.cartArr);
					this.addToJSON();
					this.countGooods()
				} else {
				let cartObj = {
					quantity: element.getAttribute('data-quantity'),
					id: element.getAttribute('data-id'),
					valuta: element.getAttribute('data-valuta'),
					title: element.getAttribute('data-title'),
					price: element.getAttribute('data-price'),
					img_src: element.getAttribute('data-img_src'),
					description: element.getAttribute('data-description')
				}
				this.cartArr.push(cartObj);
				console.log(this.cartArr);
				this.addToJSON()
				this.countGooods();
				}				
			})
		})
	}

	addToJSON (){
		this.getGoods(this.cartUrl)
		.then (data => JSON.stringify([...this.cartArr]))
		// .then (data => console.log(data))
		// .then (data => console.log(data))
	}

	countGooods () {
		let sum = 0;
		this.cartArr.forEach ((element) => {
		sum += +element.quantity
		})
		let count = document.querySelector('.quantity')
		if (sum == null) {
			count.classList.add ('hidden')
		} else {
			count.classList.remove ('hidden')
		}
		count.innerHTML = ''
		count.insertAdjacentHTML('beforeend', sum)
	}
}

