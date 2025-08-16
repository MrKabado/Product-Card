import React from 'react'
import Button from './Button'

function ProductCard({product}) {

  const alertButton = (product) => {
    alert(product.title)
  }
  return (
    <div className='rounded-lg p-5 shadow-[0_0_5px_0_gray] flex flex-col gap-5 justify-between'>
      <div className='flex flex-col gap-2'>
        <img className='rounded-md' src={product.imageSource} alt={product.imageAlt} />
        <h1 className='font-bold'>{product.title}</h1>
        <p className='font-semibold'>{product.price}</p>
        <p>{product.description}</p>
      </div>
      <Button 
        text="Buy Now"
        className="border py-1 px-5 w-full rounded-lg cursor-pointer transition hover:scale-[1.03] bg-[#121212] text-white"
        onClick={() => alertButton(product)}
      />
    </div>
  )
}

export default ProductCard
