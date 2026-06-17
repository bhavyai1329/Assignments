console.log(`Maintain two Maps:
Map<string, number> → product name → quantity
Map<string, number> → product name → price

Tasks:
Add 5 products with quantities and prices.
Borrow/update quantities for some products.
Calculate and print the total bill (quantity × price).
Print a summary like: "Soap: 3 × 40 = 120".` + "\n");

let productQuantity : Map<string, number> = new Map();

 productQuantity.set("Soap", 2);
 productQuantity.set("Brush", 3);
 productQuantity.set("Shampoo", 4);
 productQuantity.set("Tooth Paste", 1);
 productQuantity.set("Oil", 2);

let productPrice : Map<string, number> = new Map();

 productPrice.set("Soap", 25);
 productPrice.set("Brush", 37);
 productPrice.set("Tooth Paste", 425);
 productPrice.set("shampoo", 425);
 productPrice.set("Oil", 125);

 function updateQuantity (quantity : Map<string, number>, name : string, newQuantity: number) : void {
    const normalisedName : string = name.toLowerCase();
    for(const [product, totalquantity] of quantity){
        if(product.toLowerCase() === normalisedName){
            quantity.set(product, newQuantity);
            return;
        }
    }
 }

 updateQuantity(productQuantity, "oil", 2);
 updateQuantity(productQuantity, "soap", 5);

function calculateBill (price : Map<string, number>, quantity: Map<string, number>){
    for(const [pName, pQty] of quantity){
        for(const [proName, pPrice] of price){
            if(pName.toLowerCase() === proName.toLowerCase()){
                console.log(`"${pName} : ${pQty} x ${pPrice} = (${pQty} * ${pPrice})"` + "\n");
            }
        }
    }
 }

 calculateBill(productQuantity, productPrice);

 console.log("----------------------------------------------------------------------------------------------------------------" + "\n");
