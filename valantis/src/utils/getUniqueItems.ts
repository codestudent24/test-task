import { TypeProduct } from "../types/product.type"

export const getUniqueItems = (array: TypeProduct[]) => {
  const uniqueIds = new Set<string>([])
  const result: TypeProduct[] = []
  array.forEach(item => {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id)
      result.push(item)
    }
  })
  return result
}