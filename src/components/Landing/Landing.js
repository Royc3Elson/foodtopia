import React from 'react'
import { Link } from 'react-router-dom';

import './Landing.css'

import landingImg from '../../assets/png/landingImg.png'
import dish1 from '../../assets/png/dish1.png'
import dish2 from '../../assets/png/dish2.png'
import dish3 from '../../assets/png/dish3.png'
import dish4 from '../../assets/png/dish4.png'


const dishes = [
    {
        id: 1,
        name: 'Pappardelle',
        caption: 'With Vegetable',
        image: dish1,
        price: '35.00'
    },
    {
        id: 2,
        name: 'Pappardelle',
        caption: 'With Vegetable',
        image: dish2,
        price: '35.00'
    },
    {
        id: 3,
        name: 'Pappardelle',
        caption: 'With Vegetable',
        image: dish3,
        price: '35.00'
    },
    {
        id: 4,
        name: 'Pappardelle',
        caption: 'With Vegetable',
        image: dish4,
        price: '35.00'
    },
]

function Landing() {
    return (
        <div className='landing'>
            <div className='landing__nav'>
                <h1>F<span>oo</span>dtopia</h1>

                <div className='landing__nav_btns'>
                    <Link to='/login'>
                        <button className='login_btn'>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className='register_btn'>Register</button>
                    </Link>
                </div>
            </div>
            <div className='landing__container'>
                <div className='landing__containerLeft'>
                    <h1>it's not just a Food, it's an Experience.</h1>

                    <div className='landing_btns'>
                        <Link to='/menu'>
                            <button className='menu_btn'>View Menu</button>
                        </Link>
                        <Link to='/book'>
                            <button className='book_btn'>Book A Table</button>
                        </Link>
                    </div>
                </div>
                <div className='landing__containerRight'>
                    <img src={landingImg} alt="" />
                </div>
            </div>
            <div className='landing__cards'>
                {dishes.map((dish) => (
                    <div key={dish.id} className='landing__food_card'>
                        <img src={dish.image} alt="" />
                        <div className='lfc__content'>
                            <h2>{dish.name}</h2>
                            <p>{dish.caption}</p>

                            <h6>${dish.price}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Landing