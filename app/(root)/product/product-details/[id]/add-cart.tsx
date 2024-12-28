'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { addItem, CartItem } from '@/store/cartSlice'
import { Product } from '@/typing'
import React from 'react'
import { useDispatch } from 'react-redux'

const Addtocart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch()
  const {toast} = useToast()

  const addToCartHandler = () =>{
    toast({
      description:"Item Add to the cart",
      variant:"success",
    }) 
    dispatch(addItem(product))
  }
  return (
    <Button onClick={() => { addToCartHandler() }} className="mt-6 ">
      Add to Cart
    </Button>
  )
}

export default Addtocart