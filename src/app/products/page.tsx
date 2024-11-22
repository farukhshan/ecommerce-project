import Productcard from '@/components/productcard';  
import { products } from '@/Utils/Mock';
import { StaticImageData } from 'next/image';

function AllProducts() {
  return (
    <div className="flex justify-evenly mt-16 flex-wrap">
    {
      products.map((product) => (
        <Productcard 
          key={product.id} 
          title={product.name} 
          price={product.price} 
          img={product.img as StaticImageData} 
          category={product.category}
          id={product.id}
        />
      ))
    }
  </div>
  )
}

export default AllProducts