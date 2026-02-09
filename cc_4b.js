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
    name: "almond joy",
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

for (const product of products) //loops over products array. could replace 'product' with 'p'
    {
    let discount = 0;

    switch (product.category) //from when we were learning about objects
     {
        case "apparel": //anything considered apparel in the category section is used here.
            discount = 0.15;
            break; //breaks the loop for the next category
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
    }
    product.promoPrice = product.price * (1-discount); //this actually puts the data into the array. Each time the function loops, the promo price is added to each object in the array.
}
console.log (products);


