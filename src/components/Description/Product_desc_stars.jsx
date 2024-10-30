import React, { useEffect } from 'react'

const Product_desc_stars = ({str}) => {
      str=Math.floor(str);
      
  return (
    <div className="flex items-center space-x-1">
     {[...Array(str)].map((_, i) => (
        <svg key={i} className="w-6 h-6 text-luxera" fill="currentColor" viewBox="0 0 20 20" >
          <path d="M9.049 2.927a1 1 0 011.902 0l1.481 3.021a1 1 0 00.754.546l3.327.484a1 1 0 01.554 1.705l-2.406 2.347a1 1 0 00-.287.885l.568 3.312a1 1 0 01-1.45 1.054L10 14.435l-2.976 1.565a1 1 0 01-1.45-1.054l.568-3.312a1 1 0 00-.287-.885L3.449 8.683a1 1 0 01.554-1.705l3.327-.484a1 1 0 00.754-.546l1.481-3.021z" />
        </svg>
     ))}
    </div>
  )
}

export default Product_desc_stars
