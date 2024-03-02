/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react"
import { useGetItemsMutation } from "../../api/api"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { useGetFilterFunction } from "../../hooks/useGetFilterFunction"
import { useGetUniqueIdsFunction } from "../../hooks/useGetUniqueFunction"
import { setLoading } from "../../store/pageSlice"
import { TypeProduct } from "../../types/product.type"
import { getUniqueItems } from "../../utils/getUniqueItems"
import { ListItem } from "../ItemList"
import Loader from "../Loader/Loader"

export const ProductList: FC = () => {
  const [ timeoutId, setTimeoutId ] = useState<number>(0)
  const [ currentIds, setCurrentIds ] = useState<string[]>([])
  const [ items, setItems] = useState<TypeProduct[]>([])
  const { page, loading } = useAppSelector(state => state.page)
  const { isActive } = useAppSelector(state => state.filter)
  const dispatch = useAppDispatch()
  const [ mutateItems ] = useGetItemsMutation()
  const getUniqueIds = useGetUniqueIdsFunction()
  const getFilteredIds = useGetFilterFunction()

  useEffect(() => {
    async function gitIds() {
      if (isActive) {
        clearTimeout(timeoutId)
        const id = setTimeout(async () => {
          const result = await getFilteredIds()
          if (result) setCurrentIds(result)
        }, 300)
        setTimeoutId(id)
      } else {
        const ids = await getUniqueIds(page);
        if (ids) setCurrentIds(ids)
      }
    }
    gitIds()
  }, [getFilteredIds, getUniqueIds, isActive, page])

  useEffect(() => {
    function getItems() {
      dispatch(setLoading(true))
      mutateItems({ ids: currentIds }).unwrap()
      .then(response => {
        const items = getUniqueItems(response.result)
        setItems(items)
      })
      .catch(error => console.log(`rejected: ${error}`))
      .finally(() => { dispatch(setLoading(false)) })
    }
    if (currentIds.length) getItems()
  }, [dispatch, currentIds, mutateItems])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ListItem items={items} />
      )}
    </>
  )
}

