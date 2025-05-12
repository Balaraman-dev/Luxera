import React, { useEffect, useState } from "react";

const Product_desc_review = ({bar,val}) => {
  const [width,setWidth]=useState(0);
  
   useEffect(()=>{
    setWidth(bar*20);
   },[bar]); 

  return (
    <div className="flex space-x-4">
      <h2 className="text-luxera text-sm md:text-xl">{val}</h2>
      <div className="md:w-1/4 w-3/4">
        <div className=" bg-light rounded-full h-1 md:h-2 m-auto">
          <div className="bg-luxera h-1 md:h-2 rounded-full mt-2" style={{ width: `${width}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Product_desc_review;

