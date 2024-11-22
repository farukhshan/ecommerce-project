"use client"; 

import { useSelector } from "react-redux"; 
import { RootState } from "@/store/store"; 
import React from "react"; 
import Image from "next/image"; 
import Link from "next/link"; 
import { ShoppingCart } from "lucide-react"; 
import { Input } from "@/components/ui/input"; 

const Header = () => {
  const cartValue = useSelector((state: RootState) => state.cartReducer.totalQuantity
); 

  return (
    <div className="flex justify-between items-center py-6 px-8">
      <div className="flex items-center">
        <Link href={`/`}>
          <Image
            src="/logo.webp" 
            alt="Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      <div>
        <ul className="flex gap-x-10">
          <li className="text-lg">
            <Link href={"/category/Female"}>Female</Link>
          </li>
          <li className="text-lg">
            <Link href={"/category/Male"}>Male</Link>
          </li>
          <li className="text-lg">
            <Link href={"/category/Kids"}>Kids</Link>
          </li>
          <li className="text-lg">
            <Link href="/products">All Products</Link>
          </li>
        </ul>
      </div>

      <div>
        <Input placeholder="Search..." /> 
      </div>

      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <span className="absolute right-1 top-0 rounded-full bg-red-500 h-4 w-4 text-white text-xs text-center">
          {cartValue} 
        </span>
        <ShoppingCart className="h-6 w-6" /> 
      </div>
    </div>
  );
};

export default Header;
