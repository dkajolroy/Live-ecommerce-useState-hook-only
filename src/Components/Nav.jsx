import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

export default function Nav({ cartProduct }) {
    return (
        <div className='header__area'>
            <div className="container">
                <div className="header_menu">
                    <div className="logo">
                        <Link to='/'>
                            Example
                        </Link>

                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to="/">
                                <span><AiFillHome /></span>
                                Home
                            </Link></li>
                            <li style={{ position: "relative" }}><Link to="/cart">
                                <span><BsFillCartCheckFill /></span>
                                Cart {cartProduct.length}
                            </Link></li>
                            <li><Link to="/profile">
                                <span><FaUserAlt /></span>
                                Profile
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
