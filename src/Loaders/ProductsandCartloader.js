import { getStoredCart } from "../utilities/fakedb";

export const ProductandCartLoader = async() => {

       // get products
       const productData = await fetch('products.json');
       const products = await productData.json();

       // get cart data
        const savedCart = getStoredCart();
        const previousCart = [];
        // console.log('saved cart',savedCart);
        // console.log('product',products);

        for (const id in savedCart)
        {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = savedCart[id];
                addedProduct.quantity =quantity;
                previousCart.push(addedProduct);
            }

            
           
        }
        return products;
}