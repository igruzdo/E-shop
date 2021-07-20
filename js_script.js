'use strict'


























// // const API = 'getGoods.json
// class List {
//     constructor (url, container, list=list2){
//         this.container = container
//         this.list = list
//         this.url = url
//         this.goods = []
//         this.allProducts = []
//         this._init()
//     }
//     getJson(url){
//         return fetch(url ? url:this.url)
//         .then(result => result.json())
//         .catch(error => {
//             console.log(error)
//         })
//     }
//     handleData(data){
//         this.goods = [...data]
//         this.render()
//     }
//     calcSum(){
//         return this.allProducts.reduce((accum, item) => accum +=item.price, 0)
//     }
//     render(){
//         const block = document.querySelector (this.container)
//         for (let product of this.goods){
//             const productObj = new this.list[this.constructor.name](product)
//             this.allProducts.push(productObj)
//             block.insertAdjacentHTML('beforeend', productObj.render())
//         }
//     }
//     _init(){
//         return false
//     }
// }

// class Item{
//     constructor (el){
//         this.title = el.title
//         this.price = el.price
//         this.id = el.id
//         this.valuta = el.valuta
//         this.img_src = el.img_src
//         this.description = el.description
//     }
//     render(){
//         return `<figure class="fetured_block" data-id="${this.id}"> 
//                 <div class= "fetured_blok_hover">
//                     <button class="hover_button"
//                     data-id = "${this.id}"
//                     data-title = "${this.title}"
//                     data-price = "${this.price}"
//                     data-valuta = "${this.valuta}"
//                     data-img_src = "${this.img_src}">
//                     <img class="cart_small" src="img/cart_small.png" alt="">Add to Cart</button>
//                 </div>
//             <img src="${this.img_src}" alt="img" class="fetured_img">
//             <p class="fetured_text-1">${this.title}</p>
//             <p class="fetured_text-2">${this.description}</p>
//             <p class="fetured_text-3">${this.valuta} ${this.price}</p>
//             </figure>`
//     }
// }

// class ProductList extends List{
//     constructor (cart, container = '.fetured_block_line', url = 'getGoods.json'){
//         super (url, container)
//         this.cart = cart
//         this.getJson()
//         .then(data => this.handleData(data))
//     }
//     init(){
//         document.querySelector(this.container).addEventListener('click', e => {
//             if (e.target.classList.contains('hover_button')){
//                 this.cart.addProduct(e.target)
//             }
//         })
//     }
// }

// class ProductItem extends Item{}

// class Cart extends List{
//     constructor(container = '.shop_cart_render', url = 'getCart.json'){
//         super (url, container)
//         this.getJson()
//         .then(data => {
//             this.handleData(data)
//         })
//     }
//     addProduct(element){
//         let productId = +element.dataset['id']
//         let find = this.allProducts.find(product => product.id === productId)
//         if (find){
//             find.quantity++
//             this._updateCart(find)
//         }else{
//             let product = {
//                 id: productId,
//                 price: element.dataset['price'],
//                 title: element.title,
//                 valuta: element.valuta,
//                 img_src: element.img_src,
//                 quantity: 1
//             }
//             this.goods = [product]
//             this.render()
//         }
//     }
//     removeProduct(element){
//         let productId = +element.dataset['id']
//         let find = this.allProducts.find(product => product.id === productId)
//         if(find.quantity >1){
//             find.quantity--
//             this._updateCart(find)
//         }else{
//             this.allProducts.splice(this.allProducts.indexOf(find), 1)
//             document.querySelector(`.first_prod[data-id="${productId}"]`).remove()
//         }
//     }
//     _updateCart (product){
//         let block = document.querySelector(`.first_prod[data-id="${product.id}"]`)
//         block.querySelector('.quantity_count').textContent = `${product.quantity}`
//         block.querySelector('.price_prod_pink').textContent = `$${product.quantity*product.price}`
//     }
//     // _init(){
//     //     document.querySelector(this.container).addEventListener('click', e => {
//     //         if(e.target.classList.contains('del-btn')){
//     //             this.removeProduct(e.target)
//     //         }
//     //     })
//     // }
// }

// class CartItem extends Item{
//     constructor(el){
//         super(el)
//         this.quantity = el.quantity
//     }
//     render(){
//         return `<div class="first_prod d-flex" data-id="${this.id}">
//         <img src="${this.img_src}" alt="first_prod" class="shop_cart_img">
//         <div class="shop_cart_left_text">
//             <div class="prod_title d-flex ">
//                  <div class="prod_title_text">
//                      <h3 class="prod_weather">MANGO PEOPLE <br> ${this.title}</h3>
//                  </div>
//                  <div><img src="img_cart/Vector.png" alt="" class="close_all del-btn"></div>
//             </div>
//             <p class="price_prod">Price: <span class="price_prod_pink text--pink">$${this.price*this.quantity}</span></p>
//             <p class="prod_color">Color: Red</p>
//             <p class="prod_size">Size: Xl</p>
//             <p class="prod_quantity">Quantity: <span class="quantity_count">${this.quantity}</span></p>
//         </div>
//     </div>`
//     }
// }

// const list2 = {
//     ProductList: ProductItem,
//     Cart: CartItem
// }

// let cart = new Cart()
// let products = new ProductList(cart)













































// class ProductList {
//     constructor (container = '.fetured_block_line') {
//         this.container = container
//         this.goods = []
//         this._getProducts()
//         .then(data => {
//             this.goods = [...data]
//             this.render()
//         })
//     }
//     _getProducts(){
//         return fetch('getGoods.json')
//         .then(result => result.json())
//         .catch(error => {
//             console.log(error)
//         })
//     }
//     render() {
//         const block = document.querySelector(this.container)
//         for (let product of this.goods){
//             const productObj = new ProductItem (product)
//             block.insertAdjacentHTML('beforeend', productObj.listRender())
//         }
//     }
// }
// class ProductItem{
//     constructor(product){
//         this.id = product.id
//         this.valuta = product.valuta
//         this.title = product.title
//         this.price = product.price
//         this.img_src = product.img_src
//         this.description = product.description
//     }
//     listRender(){
    //     return `<figure class="fetured_block" data-id="${this.id}"> 
    //         <div class= "fetured_blok_hover">
    //             <button class="hover_button"><img class="cart_small" src="img/cart_small.png" alt="">Add to Cart</button>
    //         </div>
    //     <img src="${this.img_src}" alt="img" class="fetured_img">
    //     <p class="fetured_text-1">${this.title}</p>
    //     <p class="fetured_text-2">${this.description}</p>
    //     <p class="fetured_text-3">${this.valuta} ${this.price}</p>
    // </figure>`
//     }
// }

// class CartProductItem {
//     constructor(product){
        
//         this.quantity = product.quantity
//         this.id = product.id
//         this.valuta = product.valuta
//         this.title = product.title
//         this.price = product.price
//         this.img_src = product.img_src
//         this.description = product.description
//     }
//     cartRender(){
    // return `<div class="first_prod d-flex" data-id="${this.id}">
    //     <img src="${this.img_src}" alt="first_prod" class="shop_cart_img">
    //     <div class="shop_cart_left_text">
    //         <div class="prod_title d-flex ">
    //              <div class="prod_title_text">
    //                  <h3 class="prod_weather">MANGO PEOPLE <br> ${this.title}</h3>
    //              </div>
    //              <div><img src="img_cart/Vector.png" alt="" class="close_all"></div>
    //         </div>
    //         <p class="price_prod">Price: <span class="price_prod_pink text--pink">$${this.price}</span></p>
    //         <p class="prod_color">Color: Red</p>
    //         <p class="prod_size">Size: Xl</p>
    //         <p class="prod_quantity">Quantity: <span class="quantity_count">${this.quantity}</span></p>
    //     </div>
    // </div>`
//     }
// }
// class Cart{
//     constructor(container = '.shop_cart_render'){
//         this.container = container
//         this.cartGoods = []
//         this._getCartProducts()
//         .then(data => {
//             this.cartGoods = [...data]
//             this.render()
//         })
//     }
//     _getCartProducts(){
//         return fetch('getCart.json')
//         .then(result => result.json())
//         .catch(error => {
//             console.log(error)
//         })
//     }
//     render(){
//         const block = document.querySelector(this.container)
//         for (let product of this.cartGoods){
//             const productObjCart = new CartProductItem(product)
//             block.insertAdjacentHTML('beforeend', productObjCart.cartRender())
//         }
//     }
// }


// let list = new ProductList()
// list.render()
// let cart = new Cart()
// cart.render()






































// const goods = [
//     {
//         quantity = 0,
//         id = 1,
//         valuta: '$',
//         title: 'Backpack',
//         price: '250',
//         img_src: 'img_cat/1.jpg',
//         description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
//     },
//     {
//         quantity = 0,
//         id = 2,
//         valuta: '$',
//         title: 'Jacket', 
//         price: '350',
//         img_src: 'img_cat/2.jpg',
//         description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
//     },
//     {
//         quantity = 0,
//         id = 2,
//         valuta: '$', 
//         title: 'Hoodies', 
//         price: '250',
//         img_src: 'img_cat/3.jpg',
//         description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
//     },
//     { 
//         quantity = 0,
//         id = 2,
//         valuta: '$',
//         title: 'Pants', 
//         price: '200',
//         img_src: 'img_cat/4.jpg',
//         description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
//     },
//     { 
//         quantity = 0,
//         id = 2,
//         valuta: '$',
//         title: 'T-shirt', 
//         price: '100',
//         img_src: 'img_cat/5.jpg',
//         description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
//     },
//     { 
//         quantity = 0,
//         id = 2,
//         valuta: '$',
//         title: 'Cap', 
//         price: '50',
//         img_src: 'img_cat/6.jpg',
//         description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
//     },
//   ];

//   const renderGoodsItem = ({title, price, img_src, description, valuta}) => {
//     return `<figure class="fetured_block">
//     <div class="fetured_blok_hover">
//         <button class="hover_button"><img class="cart_small" src="img/cart_small.png" alt="">Add to Cart</button>
//     </div>
//     <img src="${img_src}" alt="img" class="fetured_img">
//     <p class="fetured_text-1">${title}</p>
//     <p class="fetured_text-2">${description}</p>
//     <p class="fetured_text-3">${valuta} ${price}</p>
// </figure>`
//   };
// const $goodsList = document.querySelector('.fetured_block_line')
// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//         item => renderGoodsItem(item)
//         ).join('\n')
//     $goodsList.insertAdjacentHTML ('beforeend',goodsList)
// }

// renderGoodsList()