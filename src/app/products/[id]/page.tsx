import Quantity from "@/components/Quantity";
import AddToCart from "@/components/ui/Addtocart";
import { products } from "@/Utils/Mock";
import Image, { StaticImageData } from "next/image";

const getProductsDetail = (id: number | string) => {
  return products.filter((product) => product.id == id);
};

const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);

  return (
    <div className="flex mt-16 py-10 flex-wrap">
      {result.length > 0 ? (
        result.map((product) => (
          <div key={product.id} className="flex justify-between gap-6">
            <Image src={product.img as StaticImageData} alt={product.name} />
            <div className="flex flex-col">
              <div>
                <h1 className="text-2xl">{product.name}</h1>
                <h2 className="text-base text-gray-400 font-semibold">
                  {product.tagline}
                </h2>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-semibold">SELECT SIZE</h3>
                <div className="flex gap-x-2 mt-2">
                  {sizes.map((item) => (
                    <div
                      key={item}
                      className="h-6 w-6 border rounded-full hover:shadow-6xl duration-300 flex justify-center items-center"
                    >
                      <span className="text-xs font-semibold text-gray-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex mt-6 gap-x-3 items-center">
                 <h3 className="text-[14px] font-semibold">Quantity:</h3>  
                  <div >
                    <Quantity/>
                  </div>
                 
                </div>
                <div className="flex items-center gap-x-4 mt-2"> 
                  <AddToCart/>
        <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
      </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No Product Found</p>
      )}
    </div>
  );
}
