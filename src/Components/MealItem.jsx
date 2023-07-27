
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';

const MealItem = ({ data }) => {
  let navigate = useNavigate();

  const handleWishlist = (e, id) => {
    e.stopPropagation(); // Prevent the card click event from being triggered
    let list = []; // Initialize list as an empty array

    try {
      const storedData = localStorage.getItem('list');
      if (storedData) {
        list = JSON.parse(storedData);
      }
    } catch (error) {
      console.error('Error parsing local storage data:', error);
    }
    
    list.push(id); // Add the new id to the list
    localStorage.setItem('list', JSON.stringify(list)); // Save the updated list to local storage
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
                  <div onClick={(e) => handleWishlist(e, item.idMeal)}>
                    <FaHeart
                      style={{
                        color: 'tomato',
                        fontSize: '20px',
                        position: 'absolute',
                        top: '5px',
                        right: '30px',
                      }}
                    />
                  </div>
                  <FaShare
                    style={{
                      color: 'rgb(32, 33, 36)',
                      fontSize: '20px',
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                    }}
                  />
                </div>
                <h6 style={{ padding: '3px', textAlign: 'center' }}>{item.strMeal}</h6>
              </div>
            );
          })}
    </div>
  );
};

export default MealItem;
