import React from 'react'
import Nav from '../Components/Nav'

function Profile({ cartProduct }) {
    return (
        <div>
            <Nav cartProduct={cartProduct} />

            My Profile
        </div>
    )
}

export default Profile