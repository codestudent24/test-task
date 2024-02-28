import { useCallback } from "react";
import { useGetIdsMutation } from "../api/api";
import { getUniqueIds } from "../utils/getUniqueIds";

export const useGetUniqueIdsFunction = () => {
  const [ mutateIds ] = useGetIdsMutation()
  const perPageDefault = 50;
  const perPage = 55;

  const cachedGetUnique = useCallback(async (page: number = 1) => {
    const offset = (page - 1) * perPageDefault

    try {
      const response = await mutateIds({ offset, limit: perPage }).unwrap()
      return getUniqueIds(response.result)
    } catch(e) {
      console.log(e)
    }

  }, [mutateIds])

  return cachedGetUnique
}