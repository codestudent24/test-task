import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { next, prev } from "../../store/pageSlice";
import styles from './pagination.module.scss';


export const Pagination: FC = () => {
  const pageNumber = useAppSelector(state => state.page.page)
  const dispatch = useAppDispatch()


  return (
    <div className={styles.pagination}>
      <button
        onClick={async () => {
          dispatch(prev())
        }}
      >
        &lt;
      </button>
      <span>{pageNumber}</span>
      <button
        onClick={async () => {
          dispatch(next())
      }}
      >
        &gt;
      </button>
    </div>
  )
}