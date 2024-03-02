import { useCallback } from "react";
import { useFilterMutation } from "../api/api";
import { useAppSelector } from "./storeHooks";

export const useGetFilterFunction = () => {
  const { filterName, filterValue } = useAppSelector(state => state.filter)
  const { page } = useAppSelector((state) => state.page)
  const [ filter ] = useFilterMutation()


  const getFilter = useCallback(async () => {
    if (!filterValue) return

    const perPageDefault = 50;
    const perPage = 55;
    const offset = (page - 1) * perPageDefault;

    try {
      const { result } = await filter({ filterName, filterValue }).unwrap()
      return result.slice(offset, offset + perPage)
      } catch(e) {
      console.log(e)
    }

  }, [filter, filterName, filterValue, page])

  return getFilter
}