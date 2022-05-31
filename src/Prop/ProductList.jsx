import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({products}) {
  return (
    <div>
      <div className="row">
      {products.map(product =>{
            return(
                <div key={products.id} className='col-sm-4'>
                    <ProductItem product={product}/>
                </div>
            )
        })}
      </div>
    </div>
  )
}
