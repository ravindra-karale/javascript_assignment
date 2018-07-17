 var shoppingCart = [
  {
    name: 'oil',
    description: 'gemini',
    price: 85,
  },
  {
    name: 'cookie',
    description: 'tiger',
    price: 10
  },
  {
    name: 'milk',
    description: 'katraj milk',
    price: 40
  },
],
module ={
  addProduct: function(productName,productDesc,productPrice) {
    shoppingCart.push({
      name: productName,
      description: productDesc,
      price: productPrice
    });
    return shoppingCart
  },
  totalProductPrice: function() {
    var total = 0
    for (var i = 0; i < shoppingCart.length; i++){
      total += shoppingCart[i].price
    }
    return "total Product Price: "+total
  },
  updatePrice: function(discount) {
    for (var i = 0; i < shoppingCart.length; i++){
      var updatePrice = (shoppingCart[i].price) - ((discount/100)*shoppingCart[i].price)
      shoppingCart[i].price = updatePrice
    }
    return shoppingCart
  }
};