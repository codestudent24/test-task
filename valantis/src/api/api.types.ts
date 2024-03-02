import { TypeProduct } from "../types/product.type"

export type TypeGetIdsParams = {
  offset?: number,
  limit?: number
}

export type TypeIdsResponse = {
  result: string[]
}

export type TypeGetItemsParams = {
  ids: string[]
}

export type TypeGetItemsResponse = {
  result: TypeProduct[]
}

export type TypeGetFieldsParams = {
  field?: string,
  offset?: number
  limit?: number
}

export type TypeGetFieldsResponse = {
  result: (string | null)[]
}

export type TypeFilterParams = {
  filterName: string,
  filterValue: string | number
}

export type TypeGetFieldsBody = {
  action: 'get_fields',
  params? : TypeGetFieldsParams
}