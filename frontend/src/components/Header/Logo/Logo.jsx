import style from './Logo.module.css';
import LogoIcon from './img/billboard.png';

export const Logo = () => {
  return ( 
      <div className={style.header__box}>
        <div className={style.logo__item}>
            <img className={style.logo__item_img} src={LogoIcon} alt="wtg app-logo"/>
        </div>
      </div>
  )
};
