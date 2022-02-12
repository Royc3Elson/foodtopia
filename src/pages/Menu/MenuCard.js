import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";

import './Menu.css'

function MenuCard({ id, name, desc, price, image }) {
    return (
        <div className='menuCard' key={id}>
            <AiOutlineHeart className='menuCard__heart'/>
            <div className='menuCard__img'>
                <img src={image} alt=""/>
            </div>
            <div className='menuCard__content'>
                <div className='mc__header'>
                    <h1>{name}</h1>
                    <IoIosAdd className='menuCard__add'/>
                </div>
                <h2>₹ {price}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default MenuCard