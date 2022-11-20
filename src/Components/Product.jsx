import React from 'react'
export default function Product({ item, alreadyCart, setCart }) {


    const addToCart = () => {
        var newProduct = [...alreadyCart, item]
        setCart(newProduct)
    }
    return (
        <div className='col-md-3'>
            <div className="product_box">
                <div className="top">
                    <img src={item.image} alt={item.name} />
                    <div className="desc">
                        <h5>{item.name.substring(0, 10)}...</h5>
                        <h3>${item.price}</h3>
                    </div>
                </div>
                <div className="action_item">
                    <button onClick={addToCart} className='btn btn-primary w-100'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
