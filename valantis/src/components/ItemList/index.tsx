import { FC } from "react";
import { TypeProduct } from "../../types/product.type";
import styles from './list.module.scss';

type TypeProps = {
  items: TypeProduct[]
}

export const ListItem: FC<TypeProps> = ({
  items
}) => {
  return (
    <section>
      {items.length ? (
        <ul className={styles.list}>
          {items.map((item, index) =>
            <div key={item.id + index} className={styles.card}>
              <h3>{item.product}</h3>
              <div className={styles.id}>id: {item.id}</div>
              {item.brand && (
                <div><strong>Брэнд:</strong> {item.brand}</div>
              )}
              <div><strong>Цена:</strong> {item.price} р.</div>
            </div>
          )}
        </ul>
      ) : (
        <div>Товаров не найдено</div>
      )}
    </section>
  )
}