import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/storeHooks";
import {
  addFilter,
  removeFilter
} from "../../store/filterSlice";
import { toFirstPage } from "../../store/pageSlice";
import { TypeFilterName } from "../../types/filter.type";
import { BrandList } from "../BrandList";
import styles from './filter.module.scss';

export const Filter: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<TypeFilterName>('product')
  const [filterValue, setFilterValue] = useState<string | number | null>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(activeFilter)
  }, [activeFilter])
  return (
    <div className={styles.container}>
      {isOpen ? (
        <>
          <button className={styles.btnClose} onClick={() => setIsOpen(false)}>x</button>
          <div className={styles.btnContainer}>
            <button
              className={activeFilter === 'product' ? styles.activeBtnFilter : styles.btnFilter}
              onClick={() => setActiveFilter('product')}
            >Наименование</button>
            <button
              className={activeFilter === 'brand' ? styles.activeBtnFilter : styles.btnFilter}
              onClick={() => setActiveFilter('brand')}
            >Производитель</button>
            <button
              className={activeFilter === 'price' ? styles.activeBtnFilter : styles.btnFilter}
              onClick={() => setActiveFilter('price')}>Цена</button>
          </div>
          {activeFilter === 'product' && (
            <div>
              <input type="text" onChange={(e) => {
                const { value } = e.target
                if (value === '') {
                  setFilterValue(null)
                } else {
                  setFilterValue(value)
                }
              }}/>
            </div>
          )}
          {activeFilter === 'price' && (
            <div>
              <input type="number" onChange={(e) => {
                const { value } = e.target
                if (value === '' || value === '0') {
                  setFilterValue(null)
                } else {
                  setFilterValue(+value)
                }
              }}/>
            </div>
          )}
          {activeFilter === 'brand' && (
            <BrandList setBrand={setFilterValue}/>
          )}
          <div className={styles.btnContainer}>
            <button onClick={() => {
              dispatch(toFirstPage())
              dispatch(addFilter({
                name: activeFilter,
                value: filterValue
              }))
            }}
            >Применить</button>
            <button onClick={() => {
              dispatch(removeFilter())
              dispatch(toFirstPage())
            }}
            >Сбросить фильтры</button>
          </div>
        </>
      ) : (
        <button className={styles.btnOpen} onClick={() => setIsOpen(true)}>Показать фильтры</button>
      )}
      </div>
  )
}