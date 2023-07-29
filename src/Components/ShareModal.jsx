
import { FaCheck } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';

const ShareModal = ({ item, showShareModal, setShowShareModal }) => {
  const inputRef = useRef(null);
  const [copy, setCopy] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    setCopy(true)
    navigator.clipboard.writeText(item.strYoutube)
  };

  const handleCloseModal = (e) => {
    e.stopPropagation()
    setShowShareModal(false); // Set showShareModal to false when the "X" button is clicked
    setCopy(false)
  };


  useEffect(() => {

    const handleOutSideClick = (e) => {

      if (inputRef && !inputRef.current.contains(e.target)) {
        setShowShareModal(false)
      }
    }

    if (showShareModal) {
      window.addEventListener('click', handleOutSideClick)
    }
    setCopy(false)
    return () => {
      window.removeEventListener('click', handleOutSideClick);
    };
  }, [showShareModal, setShowShareModal])

  return (
      <div>
        {
          showShareModal ? (
            <div>
              <input
                type="text"
                ref={inputRef}
                readOnly
                placeholder="https://www.youtube.com/"
                onClick={(e) => e.stopPropagation()}

              />

             {
             !copy?
              <button className='copy' onClick={(e) => handleCopy(e)}>Copy</button>:
              <button style={{color:'purple'}} className='copy'>Copied<FaCheck style={{fontSize:'12px'}}/></button>
              }
              <button onClick={(e)=>e.stopPropagation()} style={{ borderRadius: '0 20px 20px 0' }} className='copy' onClick={handleCloseModal}>X</button>
            </div>
          ) : null
        }

      </div>
    // </div>
  );
};

export default ShareModal;
