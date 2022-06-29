import React from 'react';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';
import '../Styles/buttons.scss';

export default function Header() {

  const [modalActive, setModalActive] = useState(false)

  return (
    <header className='header'>
      <div className="header_wrapper">
        <h1 className="header_logo">
          Tuda Go!
        </h1>
        <nav className="header_nav">
          <ul className='header_navList'>
            <li ><Link className='navList_item' to="/">Главная</Link></li>
            <li ><Link className='navList_item' to="/events">События</Link></li>
            <li ><Link className='navList_item' to="/routes">Маршруты</Link></li>
            <li ><Link className='navList_item' to="/locations">Локации</Link></li>
            <li ><Link className='navList_item' to="/aboutUs">О нас</Link></li>
          </ul>
        </nav>
        <div className="header_search">
          <input
            className='searchbox header_search'
            type="search"
            placeholder="Найти развлекуху"
          />
        </div>
        <button
          className='button login_button'
          onClick={() => setModalActive(true)}
        >
          Login
        </button>
        <Modal active={modalActive} setActive={setModalActive} >
          
          <h2>Войти</h2>
          <form className='login_form' action="">
            <div className="login_inputs">
              <input type="text" placeholder='Логин' className='login_input' />
              <input type="text" placeholder='Пароль' className='login_input' />
            </div>
            <button className='button login_button'>Войти</button>
            <div className="login_registration">
              <p>нет аккаунта на TudaGo? </p>
              <button className='button login_button'>Создать</button>
            </div>
          </form>

        </Modal>
      </div>
    </header>
  )
}

