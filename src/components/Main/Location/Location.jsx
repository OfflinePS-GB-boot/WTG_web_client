import style from './Location.module.css';
import slide_1 from './img/slide_1.jpg';
import slide_2 from './img/slide_2.jpg';
import slide_3 from './img/slide_3.jpg';
import slide_4 from './img/slide_4.jpg';

const Location = () => {
  return (
  <div class={style.locations__gallery}>
      <div class={style.locations__img_wrapper}>
          <img class={style.locations__img} src={slide_1} alt="Krasnodar triumphal arch"></img>
      </div>
      <div class={style.locations__img_wrapper}>
          <img class={style.locations__img} src={slide_2} alt="Krasnodar nature landscape"></img>
      </div>
      <div class={style.locations__img_wrapper}>
          <img class={style.locations__img} src={slide_3} alt="mountain river landscape"></img>
      </div>
      <div class={style.locations__img_wrapper}>
          <img class={style.locations__img} src={slide_4} alt="park landscape"></img>
      </div>
  </div>
  )
};

export default Location;