import { FC } from "react";
import BagsImage from '../../../assets/images/Bags.svg';

import styles from './banners.module.scss';

const FreeProducts: FC = () => {
  return <div className={styles.bagsContainer}>
    <img src={BagsImage} alt="Promotion" />
    <h2>Получай товары<br />БЕСПЛАТНО!</h2>
    <button>Узнать подробнее</button>
  </div>
}

export default FreeProducts