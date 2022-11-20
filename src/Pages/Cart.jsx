import React from 'react'
import CartProduct from '../Components/CartProduct'
import Nav from '../Components/Nav'

export default function Cart({ cartProduct }) {

    var totalPice = 0;
    for (var i = 0; i < cartProduct.length; i++) {
        totalPice = totalPice + cartProduct[i].price
    }
    return (
        <div>
            <Nav cartProduct={cartProduct} />
            <div className="container mt-5">

                <div className="row">
                    <div className="col-md-6 border-end">
                        {
                            cartProduct.length < 1 ?
                                <h2>Product Not Found</h2> :
                                cartProduct.map(x => (
                                    <CartProduct item={x} />
                                ))
                        }
                    </div>
                    <div className="col-md-6">
                        <div className="total_box">
                            <h2>Total calculation</h2>

                            <ul>
                                <li>Total Item: {cartProduct.length}</li>
                                <li>Total price:  ${totalPice}</li>
                                <li>Shipping Cost: $5</li>
                                <li>Vat + Tax: $10</li>
                            </ul>
                            <hr />
                            <h3>Subtotal: ${totalPice + 5 + 10}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
