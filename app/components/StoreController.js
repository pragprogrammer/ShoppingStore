import StoreService from './StoreService.js'

const service = new StoreService()

function draw() {
  let items = service.getItems()
  let template = ''
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    template += `
    <div>
    <div>
      <img onclick="app.Controller.StoreController.addToCart(${i})" src="${item.img}" alt="item img" />
    </div>
    <h3>${item.name}</h3>
    <h3>Price: ${item.price}</h3>
    <h3>Available: ${item.quantity}</h3>
    </div>`
  }
  document.getElementById('item').innerHTML = template
}

function drawCart() {
  let cartItems = service.getCartItems()
  let template = ''
  let totals = service.totalCart()
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    template += `
    <h3>${item.name}</h3>`
  }
  template += `
    <div>
    <h3>Subtotal: ${totals.subtotal.toFixed(2)}</h3>
    <h3>Tax: ${totals.tax.toFixed(2)}</h3>
    <h3>Total: ${totals.total.toFixed(2)}</h3>
    
    </div>`
  document.getElementById('cart').innerHTML = template
}


class Controller {
  constructor() { }

  addToCart(index) {
    service.addToCart(index)
    drawCart()
  }

}

draw()

export default Controller