import { TypeProduct } from "../types/product.type"

export type TypeGetIdsParams = {
  offset?: number,
  limit?: number
}

export type TypeGetIdsResponse = {
  result: string[]
}

export type TypeGetItemsParams = {
  ids: string[]
}

export type TypeGetItemsResponse = {
  result: TypeProduct[]
}