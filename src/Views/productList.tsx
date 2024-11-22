import Productcard from '@/components/productcard';
import { products } from '@/Utils/Mock';
import { StaticImageData } from 'next/image';

function ProductList() {
  const productchecks = products.slice(0, 3); 
 
  return (
   <div> 
    <div className='flex justify-center mt-16 font-semibold text-blue-600'>
      PRODUCTS
      </div>
      <div className='flex justify-center font-bold text-4xl mt-3'>
      Check What We Have
      </div>
    <div className="flex justify-center mt-6 ">
      
      {
        productchecks.map((product) => (
          <Productcard 
            key={product.id} 
            title={product.name}  
            price={product.price} 
            img={product.img as StaticImageData} 
            category={product.category}
            id= {product.id} 
          />
        ))
      }
    </div>
    </div>
  );
}

export default ProductList;
