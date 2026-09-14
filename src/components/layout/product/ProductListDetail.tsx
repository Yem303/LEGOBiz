'use client' 
import { useEffect, useState } from "react" 
import ProductComponent, { ProductType } from "./ProductComponentCard" 
// import ProductComponentDetail from "./ProductComponentDetail" // Unused import removed
import Link from "next/link" 
import ProductComponentDetail from "./ProductComponentDetail"

type productIdType = { 
  id: number 
} 

export default function ProductListDetail({ id }: productIdType) { 
  // Initialize state as ProductType or null
  const [product, setProduct] = useState<ProductType | null>(null) 

  useEffect(() => { 
    async function fetchingData() { 
      const response = await fetch(`https://fakestoreapi.com/products/${id}`); 
      const data = await response.json(); 
      setProduct(data); 
    } 
    fetchingData() 
  }, [id]) 

  // Guard clause while data is loading
  if (!product) {
    return <div className="text-center p-6">Loading product details...</div>
  }

  // Render the single product directly instead of mapping
  return ( 
    <div className="flex justify-center p-6"> 
      <Link href={`/products/${product.id}`}> 
        <ProductComponentDetail
          id={product.id} 
          image={product.image} 
          price={product.price} 
          title={product.title} 
          description={product.description} 
        /> 
      </Link> 
    </div> 
  ) 
}
