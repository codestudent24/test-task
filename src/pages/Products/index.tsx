import { FC } from "react"
import Layout from "../../modules/Layout"

const Products: FC = () => {
  return <>
    <h1>Products</h1>
  </>
}

const ProductsWithLayout: FC = () => {
  return <Layout hasBanners>
    <Products />
  </Layout>
}

export default ProductsWithLayout