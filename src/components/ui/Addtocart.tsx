"use client"; // Ensure this is a Client Component

import { useDispatch } from "react-redux"; 
import { Button } from "./button"; 

import toast from 'react-hot-toast';
import { cartActions } from "@/store/slice/cartSlice";

const AddToCart = () => {
  const dispatch = useDispatch(); 

  const addItem = () => {
    dispatch(cartActions.addtoCart({quantity:1}));
    toast.success("Product add Successfully")
  };

  return (
    <Button onClick={addItem}>Add to Cart</Button> 
  );
};

export default AddToCart;
 