import {useParams} from 'react-router-dom'
//to demonstrate how we can process route parameters
const ProductDetails = () => {
    console.log(useParams());
    const {id} = useParams();
    const products = [
        {id:1, name:"Laptop", description: "About Laptops"},
        {id:2, name:"Tablets", description: "About Tablets"},
        {id:3, name:"Smart Phones", description: "About Smart phones"}
    ]

    const prod = products.find(product=>product.id == id)
    console.log(prod);
    return ( <div>
        <p>{prod.name}</p>
        <p>{prod.description}</p>
    </div> );
}
export default ProductDetails;