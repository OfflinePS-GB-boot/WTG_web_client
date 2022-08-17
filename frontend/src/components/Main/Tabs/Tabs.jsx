import style from './Tabs.module.css';

const Tabs = () => {
  return (
    <nav className={style.header__navigation}>
        <ul className={style.navigation__list}>
            <li className={style.navigation__link}><a href="#events">События</a></li>
            <li className={style.navigation__link}><a href="#locations">Локации</a></li>
            <li className={style.navigation__link}><a href="#routes">Маршруты</a></li>
            <li className={style.navigation__link}><a href="#rest">Отдых</a></li>
            <li className={style.navigation__link}><a href="#team">Наша команда</a></li>
        </ul>
    </nav>
  )
};

export default Tabs;