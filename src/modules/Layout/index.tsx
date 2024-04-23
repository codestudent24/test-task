import { FC, PropsWithChildren } from "react";
import Header from "../../components/UI/Header";

import Banner from "./Banners/Banner";
import FreeProducts from "./Banners/FreeProducts";
import styles from './layout.module.scss';

type PropType = {
  hasBanners: boolean
}

const Layout: FC<PropsWithChildren<PropType>> = ({ hasBanners, children}) => {
  return <div className={styles.layout}>
    <div className={styles['main-container']}>
      <Header />
      <main>
        {children}
      </main>
    </div>
    <aside>
      <FreeProducts />
      {hasBanners && <>
        <Banner timeToChange={20} />
        <Banner timeToChange={35} />
        <Banner timeToChange={55} />
      </>}
    </aside>
  </div>
}

export default Layout;