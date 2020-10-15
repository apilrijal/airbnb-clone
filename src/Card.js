import React from 'react'
import './Card.css';

function Card({src, title, description, price}) {
    return (
        <div className="card">
            <img src="https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594_1280.jpg" alt="" />
            <div className="card_info">
                <h2>Full house to use</h2>
                <h4>the best of the byron bay. that can be booked</h4>
                <h3>$56</h3>
            </div>
        </div>
    )
}

export default Card;
