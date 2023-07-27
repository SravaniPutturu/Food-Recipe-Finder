import React from 'react'

const Recipeindex = ({alphaIndex}) => {

    const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
  return (
    <div className='indexContainer'>
        {
            alphabets.map((item,index)=>{
                return <div key={index} onClick={()=>alphaIndex(item)}>
                    <h5 className='item'>{item}</h5>
                </div>
            })
        }
        
    </div>
  )
}

export default Recipeindex;