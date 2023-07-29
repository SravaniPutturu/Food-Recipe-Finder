import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';


const Recipeindex = ({ alphaIndex }) => {

    const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")

    const [hideFooter, setHideFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            //get current scroll position 
            const scrollY = window.scrollY;

            //Adjust this threshold value based on when to hide the footer
            const threshold = 200;

            if (scrollY > threshold) {
                setHideFooter(true)
            } else {
                setHideFooter(false)
            }
        }

        //Attach the event listener
        window.addEventListener('scroll', handleScroll)

        //Clean up event listener when the component is unmounted 
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])




    return (
        <footer className={hideFooter ? 'hide-footer' : null} style={{ transition: 'transform 0.3s', width: '100%', display: 'flex', position: 'fixed', bottom: '0', justifyContent: 'space-between', background: 'black', padding: '15px 35% 15px 35%', }}>
            {
                alphabets.map((item, index) => {
                    return <div key={index} onClick={() => alphaIndex(item)}>
                        <p className='item'>{item}</p>
                    </div>
                })
            }
            <p style={{ position: 'absolute', bottom: '0', right: '5px', fontFamily: 'Great Vibes' }}>Made with <FaHeart style={{ color: 'red' }} /> by  Sravani</p>
        </footer>
    )
}

export default Recipeindex;