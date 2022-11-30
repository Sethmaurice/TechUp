const items = [
    {name: 'Bike',     price: 100  }, {name: 'TV',       price: 200  },{name: 'Album',    price: 10   },{name: 'Book',     price: 5    },{name: 'Phone',    price: 500  },{name: 'Computer', price: 1000 }
]
var a = 0
var sum = 0 
  while(a<6){
    sum = sum + items[a].price
    a++
  }
console.log(`The full price of all products combined is ${sum}`)
console.log(`The full prices of all products combined is ${sum}`)