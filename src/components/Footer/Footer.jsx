import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="logo">
          <div className="footer_logo">
            LOGO
          </div>
          <div className="footer_logoDescription">
            <p className="footer_logoP">
              Подберём лучший отдых. В этом поможет наш ИИ и <br /> замечательная фронтенд часть сайта
            </p>
          </div>
        </div>
        <div className="column">
          <ul className='footer_column'>
            <li className='footer_item'><Link className='footer_navItem' to="/aboutUs">О нас</Link> </li>
            <li className='footer_item'><a className='footer_navItem' href="#">Города</a></li>
            <li className='footer_item'><a className='footer_navItem' href="#">Пункт 3</a></li>
          </ul>
        </div>
        <div className="column">
          <ul className='footer_column'>
            <li className='footer_item'><a className='footer_navItem' href="#">Твитор</a></li>
            <li className='footer_item'><a className='footer_navItem' href="#">Фейсбук</a></li>
            <li className='footer_item'><a className='footer_navItem' href="#">Телеграм</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
