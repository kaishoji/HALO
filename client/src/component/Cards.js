import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these wonderful destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/nyc.jpg'
              text='Explore the amazing Big Apple, New York City!'
              label='New York'
              path='/Flights'
            />
            <CardItem
              src='images/stonehendge.jpg'
              text='Visit the strange and alluring Stonehenge!'
              label='England'
              path='/Flights'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/falls.jpg'
              text='See the majestic Wailua Falls, make sure to bring your camera! '
              label='Hawaii'
              path='/Flights'
            />
            <CardItem
              src='images/mtfuji.jpg'
              text='Experience Japan like never before! Tickets 10% off!'
              label='Japan'
              path='/Flights'
            />
            <CardItem
              src='images/sydney.jpg'
              text='Visit the iconic opera house and enjoy the summer weather!'
              label='Australia'
              path='/Flights'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;