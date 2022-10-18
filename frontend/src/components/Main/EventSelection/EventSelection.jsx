import style from './EventSelection.module.css';
import Line from './../../Line';

export const EventSelection = () => (
  <> 
    <Line />
    <div className={style.container}>
        <p className={style.text}>Не знаете где провести выходные или набраться впечатлений, не волнуйтесь!</p>
        <p className={style.title}>Мы сделаем это за Вас!</p>
    </div>
  </>
);
