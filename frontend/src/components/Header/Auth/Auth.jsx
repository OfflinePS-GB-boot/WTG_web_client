import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/auth.svg';

export const Auth = () => {
  return (
      <button className={style.auth__button}>
        <AuthIcon/>
      </button>
  )
};

