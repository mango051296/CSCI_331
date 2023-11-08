import Reat,{ useState, useEffect } from "react"; 

 export default function SearchBar() {
    
        const [products, setProducts] = useState([])
        const [searchString, setSearchString] = useState('')
        const handleInputChange = (event) => setSearchString(event.target.value)
        const filteredProducts = products.filter((product) => product.title.includes(searchString))

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then((response) => response.json())
                // .then{result => console.log(result)}
                .then((json) => setProducts(json))})

        
        return (
         <div>
             <input type="text" value={String} onChange={handleInputChange}/>
             <table>
                  {filteredProducts.map((product) => {
                     return <table className="product_table">
                         <tr>
                            <th>
                                {product.title}
                            </th>
                        </tr>
                        <tr>    
                            <th>
                                <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                            </th>
                        </tr>
                         
                         <tr>
                            <th>${product.price}</th>
                        </tr>
                         </table>
                 })} 
             </table>
         </div>
       ) 
 }