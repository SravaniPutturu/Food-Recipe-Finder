import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return (

        <nav style={{ display: 'flex', justifyContent: 'space-between', background: 'white', padding: '15px', position: 'fixed', top: '0', width: '100%', zIndex: '1' }}>
            <p onClick={() => navigate('/')} style={{ color: 'black', fontFamily: 'Great Vibes', fontSize: '25px', fontWeight: '900' }}>MyMenu</p>
            <p onClick={() => navigate('./wishlist')}>
                <FaHeart
                    style={{
                        color: 'black',
                        fontSize: '30px',
                    }}
                />
            </p>
        </nav>

    )
}

export default Navbar