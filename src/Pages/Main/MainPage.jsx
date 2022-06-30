import React, { useEffect, useState } from 'react';
import '../Main/MainPage.scss';
import location_icon from '../../img/location_icon.png';
import Card from '../../components/Card/Card';

export default function MainPage() {

  const DB = "./testDB.json"; //!TODO: перенести в отдельный файл (типа .env) <- сюда эндпоинт откуда загружать рекомендуемые локации. 

  // хук useEffect, чтобы загрузить данные из базы данных при загрузке страницы
  useEffect(() => {
    
    fetch(DB)                 //!TODO добавить асинхронность
      .then(response => response.json())
      .then(data => {
        // console.log(data);
      })
      .catch(err => console.log( 'ошибка при fetch ' + err))
  },[]);

  const [cards, setCards] = useState([
    {id:1, title: 'place1', descr: 'this is place1'},
    {id:2, title: 'place2', descr: 'this is place2'},
    {id:3, title: 'place3', descr: 'this is place3'},
    {id:4, title: 'place4', descr: 'this is place4'}
  ]) 

  return (
    <div className='mainPage_wrapper'>

      <section className="hero">
        <div className="hero_location">
          <span className="hero_marker"><img src={location_icon} alt="" className="location_icon" /></span>
          <span className="hero_city">Москва</span>
        </div>
        <h2 className="hero_header">
          НАЙДИ СОБЫТИЕ !
        </h2>
        <form>
          <input
            type="text"
            placeholder="введи место или дату"
            className='hero_input'
          />
          <button
            className='hero_button button'
          >в путь!</button>
        </form>
      </section>

      <section className="recomendation">
        <h2 className="recomendation_header">
          Рекомендации
        </h2>
        <div className="recomendaion_cardsWrap">         
          {cards.map(card =>              
              <Card card = {card} key={card.id}/>
            )}
        </div>

      </section>




    </div>
  )
}
