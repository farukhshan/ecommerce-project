import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BannerImage from "/public/banner-image.webp";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-5">
      <div className="flex-1">
        <Badge className=" py-3 px-6 rounded-lg bg-blue-400">Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 mt-6">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <Button className="bg-black text-white h-12 px-8 mt-6">Start Shopping</Button>
      </div>

      


      <div className="relative flex-1 flex justify-center items-center">
       
        <div className="absolute w-[90%] h-[90%] bg-orange-100 rounded-full -z-10"></div>

      
        <Image
          src={BannerImage}
          alt="Banner Image"
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
