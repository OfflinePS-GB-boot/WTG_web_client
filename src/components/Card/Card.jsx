import React from 'react';
import './Card.scss';
import image from '../../img/cardImg.jpg';
import star from '../../img/star.svg';

// переиспользуемый компонент карточка. Пока используетс в блоке рекомендации на главной странице

export default function Card(props) { 

  return (
    
    <div className="card">
      <img src={image} alt="картинка карточки" />
      <div className="descr">
        <p className='card_descr'> <strong>{props.card.title}</strong> </p> <p className='card_descr'>цена: 5000 р.</p>        
      </div>
      <p>{props.card.descr}</p>
      <hr />
      <div>
        <p className='card_rating'>рейтинг: <span><img src={star} alt="" /></span><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span></p>
      </div>
    </div>  
    
  )
}
