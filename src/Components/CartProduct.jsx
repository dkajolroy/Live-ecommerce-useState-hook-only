import React from 'react'

export default function CartProduct({ item }) {
    return (
        <div className='cart_item_product'>
            <div className="left">
                <img src={item.image} alt={item.name} />
                <h5>{item.name}</h5>
            </div>
            <div className="right">
                <h3> ${item.price}</h3>
                <h3> Quantity: 1</h3>
            </div>
        </div>
    )
}
