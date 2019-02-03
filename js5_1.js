var basket = [
    {item: "Синтезатор", itemPrice: 12000, itemCount: 1},
    {item: "Педаль", itemPrice: 1500, itemCount: 1},
    {item: "Нотные сборники", itemPrice: 1500, itemCount: 5},
    {item: "Стойка", itemPrice: 1700, itemCount: 1}
]
var $products = document.getElementById('products')
basketPrice = 0
basketCount = 0
    if (i == 0) {
        $div.textContent = 'Корзина пуста'
        basketPrice = 0
    }
    
    for (var i = 0; i < basket.length; i++) {
        basketPrice = basketPrice + basket[i].itemPrice * basket[i].itemCount
        basketCount = basketCount + basket[i].itemCount
       
    }
    
    $products.textContent = 'В корзиине: ' + basketCount + ' товаров на сумму ' + basketPrice + ' рублей.' 
    
