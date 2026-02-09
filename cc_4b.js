let products = [
    {
    sku: "0101", 
    name: "apples",
    category: "fruit",
    price: 4.99,
    inventory: 35    
},
  {
    sku: "0201",
    name: "bananas",
    category: "groceries",
    price: 1.49,
    inventory: 29   
},
  {
    sku: "3001",
    name: "television",
    category: "electronics",
    price: 589.99,
    inventory: 12    
},
  {
    sku: "4001",
    name: "blazer",
    category: "apparel",
    price: 62,
    inventory: 7    
},
  {
    sku: "0303",
    name: "tissues",
    category: "household",
    price: 5.99,
    inventory: 28   
}
]

for (const product of products) {
    let discount = 0;

    switch (product.category) {
        case "apparel":
            discount = 0.15;
            break;
         case "electronics":
            discount = 0.20;
            break;
        case "groceries":
            discount = 0.10;
            break;
        case "household":
            discount = 0.10;
            break;
        default:
            console.log(`No discount for category: ${product.category}`);
            break;
    }
    product.promoPrice = product.price * (1-discount);
}
console.log (products);


