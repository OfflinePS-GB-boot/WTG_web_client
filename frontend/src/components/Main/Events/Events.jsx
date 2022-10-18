import { Line } from '../../Line/Line';
import style from './Events.module.css';
import EventsImg from './img/Events.jpg';

export const Events = () => (
  <> 
    <img src={EventsImg} className={style.img} alt='События' />
    <Line />
  </>
);