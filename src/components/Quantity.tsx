'use client'; 

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store'; // Adjust the path as needed

import { useState } from 'react';


const Quantity = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.cartReducer.totalQuantity);
  const [num, setNum] = useState(quantity);   

  const handleIncrease = () => {
    setNum(num + 1);
    // dispatch(cartActions.increment()); 
  };

  const handleDecrease = () => {
    if (num > 1) {
      setNum(num - 1);
      // dispatch(cartActions.decrement()); 
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <div
        className="border h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleDecrease}
      >
        -
      </div>
      <span className="text-sm">{num}</span>
      <div
        className="border h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleIncrease}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;
