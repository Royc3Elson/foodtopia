import React from 'react'
import { Link } from 'react-router-dom';

import './Landing.css'

import landingImg from '../../assets/png/landingImg.png'

function Landing() {
    return (
        <div className='landing'>
            <div className='landing__container'>
                <div className='landing__containerLeft'>
                    <h1>It's not just a Food, it's an Experience.</h1>

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
        </div>
    )
}

export default Landing