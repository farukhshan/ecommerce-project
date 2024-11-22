import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Addtocart from "./ui/Addtocart";

function Productcard(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
}) {
  return (
   <Link href={`/products/${props.id}`}> <div className="py-5">
      <Image src={props.img} alt={props.title} />
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className="font-bold text-lg">${props.price}</p>
      <p className="font-bold text-lg">
        Category{" "}
        <span className="text-base font-normal"> {props.category} </span>{" "}
      </p>
      <Addtocart/>
    </div>
    </Link> );
}

export default Productcard;
