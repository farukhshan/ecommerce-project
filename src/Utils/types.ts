import { StaticImageData } from "next/image"

export type product = {
    id: number;
    name: string;
    tagline: string;
    category: string;
    price: number;
    img: string | StaticImageData; 
}