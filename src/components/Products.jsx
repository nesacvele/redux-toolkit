import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getSingleProductAction} from '../store/productSlice'

function Products() {

  const {allProducts, isLoading} = useSelector((state) => state.productStore); 
  const dispatch = useDispatch(); 

  const handlepProduct = () => {
    dispatch(getSingleProductAction({name:'Nenad', age:41, address: 'Nemanjina 8, Krnjevo' }))
  }

  return (
    <div>
        {/* {isLoading ? <h2>Loading...</h2> : allProducts.map((product, index) =>{
            return <h2>{product.title}</h2>
        })} */}

        <h1>Product</h1>

        <button onClick={handlepProduct}>Get Single Product</button>
    </div>
  )
}

export default Products