import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import ShareModal from './ShareModal';

const WishList = () => {

    const [showShareModal, setShowShareModal] = useState(false);

    const [wishList, setWishList] = useState(() => {

        const listData = localStorage.getItem('list');
        try {
            return JSON.parse(listData) || [];
        } catch (error) {
            console.error('Error parsing wishlist data:', error);
            return [];
        }
    });

    let navigate = useNavigate();


    const handleWishlist = (e, item) => {
        // Implemented logic to add or remove items from the wishlist here
        e.stopPropagation()
        const newList = wishList.filter((storageItem) => storageItem.idMeal !== item.idMeal);
        setWishList(newList);
        localStorage.setItem('list', JSON.stringify(newList))

    };

    // Assuming 'navigate' function is defined elsewhere in the code or imported

    return (
        <div>
            <h1 style={{ fontFamily: 'Great Vibes', color: 'white', top: '85px', position: 'absolute', left: '10%' }}>Your's Favourite recipes...</h1>
            <div style={{ width: '70%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit , minmax(200px,1fr))', gap: '2%', margin: '10% 0 0 10%' }}>
                {wishList &&
                    wishList.map((item) => (
                        <div
                            style={{ background: 'black', borderRadius: '0 0 10px 10px' }}
                            key={item.idMeal}
                            onClick={() => {
                                // Assuming 'navigate' function is defined elsewhere in the code or imported
                                navigate(`/${item.idMeal}`);
                            }}
                        >
                            <div style={{ position: 'relative' }}>
                                <img src={item.strMealThumb} alt="" />
                                <span
                                    style={{
                                        color: 'rgb(32, 33, 36)',
                                        fontSize: '20px',
                                        position: 'absolute',
                                        top: '5px',
                                        right: '10px',
                                        fontWeight: '700'
                                    }}
                                    onClick={(e) => handleWishlist(e, item)}
                                >
                                    X
                                </span>

                                <FaShare
                                    onClick={(e) => { e.stopPropagation(); setShowShareModal(true); }} // Set showShareModal to true when the share icon is clicked

                                    style={{
                                        color: 'white',
                                        fontSize: '45px',
                                        position: 'absolute',
                                        bottom: '5px',
                                        right: '5px',
                                    }}
                                />
                                <div style={{ width: '100%', position: 'fixed', top: '50%',left:'50%', transform: 'translate(-50%,-50%)', color: 'white' }}>
                                    <ShareModal onClick={(e) => e.stopPropagation()} item={item} showShareModal={showShareModal} setShowShareModal={setShowShareModal} />
                                </div>
                            </div>
                            <h6 style={{ padding: '3px', textAlign: 'center' }}>{item.strMeal}</h6>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default WishList;
