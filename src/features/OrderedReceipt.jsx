import React from 'react';
import { useSelector } from 'react-redux';

const OrderedReceipt = () => {
 
  const totalCakesOrdered = useSelector((state) => state.cake.totalCakesOrdered);
  const totalIcecreamsOrdered = useSelector((state) => state.icecream.totalIcecreamsOrdered);

  return (
    <div>
     <h2>Receipt :</h2>
      <h3>Total Ordered Cakes: {totalCakesOrdered}</h3>
      <h3>Total Ordered Icecreams: {totalIcecreamsOrdered}</h3>
    </div>
  );
};

export default OrderedReceipt;

