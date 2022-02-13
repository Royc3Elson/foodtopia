import React, { useContext } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { db } from '../../firebase/firebase';

import { AuthContext } from '../../context/AuthContext'
import './Menu.css'

function MenuCard({ id, name, desc, price, image }) {

    const { currentUser } = useContext(AuthContext);

    const addToCart = () => {
        db.collection('users').doc(currentUser.uid).collection('cart').add({
            name: name,
            id: id,
            price
        }).then(() => {
            alert('Added to Cart  :)')
        })
    }


    return (
        <div className='menuCard' key={id}>
            <AiOutlineHeart className='menuCard__heart'/>
            <div className='menuCard__img'>
                <img src={image} alt=""/>
            </div>
            <div className='menuCard__content'>
                <div className='mc__header'>
                    <h1>{name}</h1>
                    <IoIosAdd onClick={addToCart} className='menuCard__add'/>
                </div>
                <h2>₹ {price}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default MenuCard