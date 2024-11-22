import Productcard from '@/components/productcard';
import { products } from '@/Utils/Mock';
import { StaticImageData } from 'next/image';

const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) { // Capitalize 'Page'
  const result = getProductsByCategory(params.slug);

  return (
    <div className="flex justify-evenly mt-16">
      {result.length > 0 ? (
        result.map((product) => (
          <Productcard 
            key={product.id} 
            title={product.name} 
            price={product.price} 
            img={product.img as StaticImageData} 
            category={product.category}
            id={product.id}
          />
        ))
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
}
