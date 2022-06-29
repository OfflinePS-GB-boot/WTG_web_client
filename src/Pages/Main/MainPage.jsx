import React from 'react'
import '../Main/MainPage.scss'
import image from '../../img/cardImg.jpg'
import star from '../../img/star.svg'
import location_icon from '../../img/location_icon.png'

export default function MainPage() {
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
          {/* card1 */}
          <div className="card">
            <img src={image} alt="картинка карточки" />
            <div className="descr">
              <p className='card_descr'>Направление <span className='card_price'>цена: 5000 р.</span></p>
              <hr />
              <p className='card_rating'>рейтинг: <span><img src={star} alt="" /></span><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span></p>

            </div>
          </div>
          {/* card 1 end */}
          {/* card2 */}
          <div className="card">
            <img src={image} alt="картинка карточки" />
            <div className="descr">
              <p className='card_descr'>Направление <span className='card_price'>цена: 5000 р.</span></p>
              <hr />
              <p className='card_rating'>рейтинг: <span><img src={star} alt="" /></span><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span></p>

            </div>
          </div>
          {/* card 2 end */}
          {/* card3 */}
          <div className="card">
            <img src={image} alt="картинка карточки" />
            <div className="descr">
              <p className='card_descr'>Направление <span className='card_price'>цена: 5000 р.</span></p>
              <hr />
              <p className='card_rating'>рейтинг: <span><img src={star} alt="" /></span><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span></p>

            </div>
          </div>
          {/* card 3 end */}
          {/* card4 */}
          <div className="card">
            <img src={image} alt="картинка карточки" />
            <div className="descr">
              <p className='card_descr'>Направление <span className='card_price'>цена: 5000 р.</span></p>
              <hr />
              <p className='card_rating'>рейтинг: <span><img src={star} alt="" /></span><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span></p>

            </div>
          </div>
          {/* card 4 end */}
        </div>

      </section>




    </div>
  )
}
