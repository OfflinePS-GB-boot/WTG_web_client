import style from './Auth.module.css';
import {RegistrationForm} from '../../RegistrationForm/RegistrationForm';
import {ReactComponent as AuthIcon} from './img/auth.svg';
import {useState} from 'react';

export const Auth = () => {
  const [modalActive,  setModalActive] = useState(false);

  return (
      <div>
         <button className={style.auth__button} onClick={() => setModalActive(true)}>
        <AuthIcon/>
      </button>
      <RegistrationForm active={modalActive} setActive={setModalActive}/>
    </div>
   
  )
};

