import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

import './Menu.css'
import MenuCard from './MenuCard'

import burger from '../../assets/png/menu/burger.png'
import hotdog from '../../assets/png/menu/hotdog.png'
import pizza from '../../assets/png/menu/pizza.png'
import pepsi from '../../assets/png/menu/pepsi.png'
import sandwich from '../../assets/png/menu/sandwich.png'
import sushi from '../../assets/png/menu/sushi.png'



const menuItems = [
  {
    id: 1,
    name: 'Chicken Burger',
    desc: 'Tasty yummy burger yummy tasty food',
    price: '99',
    image: burger
  },
  {
    id: 2,
    name: 'Hotdog',
    desc: 'Tasty yummy hotdog yummy tasty food',
    price: '79',
    image: hotdog
  },
  {
    id: 3,
    name: 'Pizza',
    desc: 'Tasty yummy pizza yummy tasty food',
    price: '150',
    image: pizza
  },
  {
    id: 4,
    name: 'Pepsi',
    desc: 'Tasty yummy pepsi yummy tasty drink',
    price: '30',
    image: pepsi
  },
  {
    id: 5,
    name: 'Sandwich',
    desc: 'Tasty yummy sandwich yummy tasty food',
    price: '99',
    image: sandwich
  },
    {
    id: 6,
    name: 'Sushi',
    desc: 'Tasty yummy sushi yummy tasty food',
    price: '199',
    image: sushi
  },
]

function Menu() {
  return (
    <div className='menu'>
      <Link to='/'>
        <IoArrowBackOutline className='menu_back'/>
      </Link>
      <div className='menu_header'>
        <h1>Our Menu</h1>
      </div>
      <div className='menu_container'>
        {menuItems.map((menu) => (
          <MenuCard 
            id={menu.id}
            key={menu.id}
            name={menu.name}
            desc={menu.desc}
            price={menu.price}
            image={menu.image}
          />
        ))}
      </div>
    </div>
  )
} 

export default Menu