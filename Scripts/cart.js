class CartProductItem{
    constructor(product){
        this.quantity = product.quantity
        this.id = product.id
        this.valuta = product.valuta
        this.title = product.title
        this.price = product.price
        this.img_src = product.img_src
        this.description = product.description
    }
    cartRender(){
    return `<div class="first_prod d-flex" data-id="${this.id}">
        <img src="${this.img_src}" alt="first_prod" class="shop_cart_img">
        <div class="shop_cart_left_text">
            <div class="prod_title d-flex ">
                 <div class="prod_title_text">
                     <h3 class="prod_weather">MANGO PEOPLE <br> ${this.title}</h3>
                 </div>
                 <div><img src="img_cart/Vector.png" alt="" class="close_all"></div>
            </div>
            <p class="price_prod">Price: <span class="text--pink">${this.valuta} ${this.price}</span></p>
            <p class="prod_color">Color: Red</p>
            <p class="prod_size">Size: Xl</p>
            <p class="prod_quantity">Quantity: <input type="text" class="quantity_count" value = ${this.quantity}></p>
        </div>
    </div>`
    }
}

class Cart{
    constructor(container = '.shop_cart_render'){
        this.container = container
        this.cartGoods = []
        this._getCartProducts()
        .then(data => {
            this.cartGoods = [...data]
            console.log(this.cartGoods)
            this.render()
        })
    }
    _getCartProducts(){
        return fetch('getCart.json')
        .then(result => result.json())
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        for (let product of this.cartGoods){
            const productObjCart = new CartProductItem(product)
            document.querySelector(this.container).insertAdjacentHTML('beforeend', productObjCart.cartRender())
        }
    }
}

let cart = new Cart()
cart.render()