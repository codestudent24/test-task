import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useGetUniqueIdsFunction } from "../../hooks/useGetUniqueFunction";
import styles from './pagination.module.scss';

type PropsType = {
  setIds: Dispatch<SetStateAction<string[]>>
}

export const Pagination: FC<PropsType> = ({
  setIds
}) => {
  const [pageNumber, setPageNumber] = useState(1)
  const getUniqueIds = useGetUniqueIdsFunction()

  useEffect(() => {
    async function getInitialItems() {
      const ids = await getUniqueIds();
      if (ids) setIds(ids)
    }
    getInitialItems()
  }, [getUniqueIds, setIds])

  return (
    <div className={styles.pagination}>
      <button
        onClick={async () => {
          if (pageNumber > 1) {
            const prevPageNumber = pageNumber - 1;
            const response = await getUniqueIds(prevPageNumber)
            if (response) {
              setPageNumber(prevPageNumber)
              setIds(response)
            }
          }
        }}
      >
        Prev
      </button>
      <span>{pageNumber}</span>
      <button
        onClick={async () => {
          const nextPageNumber = pageNumber + 1;
          const response = await getUniqueIds(nextPageNumber)
          if (response) {
            setPageNumber(nextPageNumber)
            setIds(response)
          }
      }}
      >
        Next
      </button>
    </div>
  )
}