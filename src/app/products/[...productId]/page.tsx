import ProductComponentDetail from "@/components/layout/product/ProductComponentDetail";
import ProductListDetail from "@/components/layout/product/ProductListDetail";


export default async function page({params,}:{
    params: Promise<{id: number}>
}) {
    const {id} = await params;
  return (
    <div>
      <ProductListDetail id={id}/>
    </div>
  )
}
