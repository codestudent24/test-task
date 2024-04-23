import { FC } from "react";

import AppStoreImage from '../../../assets/images/App Store.svg';
import FacebookImage from '../../../assets/images/Facebook.svg';
import GooglePlayImage from '../../../assets/images/Google Play.svg';
import InstImage from '../../../assets/images/Inst.svg';
import VkImage from '../../../assets/images/Vk.svg';

import styles from './footer.module.scss';

const Footer: FC = () => {
  return <footer className={styles.footer}>
    <div className={styles['contacts-container']}>
      <p>React</p>
      <div className={styles.contacts}>
        <div>
          <p>Присоединяйтесь к нам</p>
          <div className={styles['buttons-container']}>
            <button>
              <img src={FacebookImage} alt="Facebook" />
            </button>
            <button>
              <img src={VkImage} alt="VK" />
            </button>
            <button>
              <img src={InstImage} alt="Instagram" />
            </button>
          </div>
        </div>
        <div>
          <p>Устанавливайте приложение</p>
          <div className={styles['buttons-container']}>
          <button>
              <img src={GooglePlayImage} alt="Download from Google Play" />
            </button>
            <button>
              <img src={AppStoreImage} alt="Download from App Store" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.trade}>
      <p>&copy; Sionic</p>
      <p>Правовая информация</p>
      <p>Политика конфиденциальности</p>
    </div>
  </footer>
}

export default Footer