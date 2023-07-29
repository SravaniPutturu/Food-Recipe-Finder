
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import ShareModal from './ShareModal';
import { useState } from 'react';


const MealItem = ({ data }) => {
  const navigate = useNavigate();

  const [showShareModal, setShowShareModal] = useState(false);


  const isItemInWishlist = (itemId) => {
    const wishlistJSON = localStorage.getItem('list');
    const wishlist = wishlistJSON ? JSON.parse(wishlistJSON) : [];
    return wishlist.some((item) => item.idMeal === itemId);
  };
  

  const handleWishlist = (e, item) => {
    e.stopPropagation();
    const wishlist = JSON.parse(localStorage.getItem('list')) || [];

    if (isItemInWishlist(item.idMeal)) {
      // If the item is already in the wishlist, remove it
      const updatedWishlist = wishlist.filter((storedItem) => storedItem.idMeal !== item.idMeal);
      localStorage.setItem('list', JSON.stringify(updatedWishlist));
    } else {
      // If the item is not in the wishlist, add it
      wishlist.push(item);
      localStorage.setItem('list', JSON.stringify(wishlist));
    }
  };



  return (
    <div className='recipeContainer'>
      {!data
        ? "Not Found...."
        : data.map((item, index) => {
            return (
              <div
                className='card'
                key={item.idMeal}
                onClick={() => {
                  navigate(`/${item.idMeal}`);
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img src={item.strMealThumb} alt="" />
                  <FaHeart
                    style={{
                      color: isItemInWishlist(item.idMeal) ? 'red' : 'white',
                      fontSize: '20px',
                      position: 'absolute',
                      top: '5px',
                      right: '30px',
                    }}
                    onClick={(e) => handleWishlist(e, item)}
                  />
                  <FaShare
                    onClick={(e) => {e.stopPropagation(); setShowShareModal(true); }} // Set showShareModal to true when the share icon is clicked

                    style={{
                      color:'black',
                      fontSize: '20px',
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                    }}
                  />
                  <div style={{width:'100%',position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white'}}>
                  <ShareModal onClick={(e)=>e.stopPropagation()}  item={item}  showShareModal={showShareModal} setShowShareModal={setShowShareModal}/>
                  </div>
                </div>
                <h6 style={{ padding: '3px', textAlign: 'center' }}>{item.strMeal}</h6>
              </div>
            );
          })}
    </div>
  );
};

export default MealItem;
