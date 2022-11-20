import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Product from '../Components/Product'
import { data } from '../helpers/database'

export default function Home({ cartProduct, setCartProduct }) {


    return (
        <div className='home_components'>
            <Nav cartProduct={cartProduct} />
            <div className="container">
                <div className="row gx-2 gy-2" >
                    {
                        data.map((x, i) => (
                            <Product alreadyCart={cartProduct} setCart={setCartProduct} key={i} item={x} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
