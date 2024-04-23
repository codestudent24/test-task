import { FC, useEffect, useState } from "react";
import FirstBannerImage from '../../../assets/images/Banner1.png';
import SecondBannerImage from '../../../assets/images/Banner2.png';
import generateRandomBoolean from "../../../shared/helpers/generateRandomBoolean";

import styles from './banners.module.scss';

type BannerPropsType = {
  timeToChange?: number
}

const Banner: FC<BannerPropsType> = ({ timeToChange = 10 }) => {
  const [isFirstImage, setIsFirstImage] = useState(generateRandomBoolean())

  useEffect(() => {
    const id = setInterval(() => {
      setIsFirstImage(prev => !prev)
    }, 1000 * timeToChange)

    return () => {
      clearInterval(id)
    }
  }, [setIsFirstImage, timeToChange])

  return <div className={styles.bannerContainer}>
    {isFirstImage ? <>
      <img key={1} src={FirstBannerImage} alt="New Collection Promotion" />
    </> : <>
      <img key={2} src={SecondBannerImage} alt="New Collection Promotion" />
    </>}
    <h2>Новая<br />коллекция</h2>
  </div>
}

export default Banner