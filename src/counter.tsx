// 'use client'

// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/store/store'; // Adjust the path as needed
// import { cartActions } from '@/store/slice/cartSlice';

// export const CounterView = () => {
//   const counterValue = useSelector((state: RootState) => state.cartReducer.totalQuantity);
//   const dispatch = useDispatch();

//   const increment = () => dispatch(cartActions.addToCart());
//   const decrement = () => dispatch(cartActions.removeFromCart());

//   return (
//     <div className='py-6 flex gap-6 justify-center'>
//       <button className='py-4 px-3 rounded-md bg-green-400' onClick={increment}> 
//         Increment
//       </button>
//       <div> Counter Value: {counterValue} </div>
//       <button className='py-4 px-3 rounded-md bg-red-400' onClick={decrement}> 
//         Decrement
//       </button>
//     </div>
//   );
// };
