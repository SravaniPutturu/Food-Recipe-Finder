import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import Recipeindex from './Recipeindex'
import { Quotes } from './Quotes'

const Meal = () => {

    
      
    const [url,setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    const [item,setItem] = useState("")
    const [show,setShow] = useState(false)
    const [search,setSearch] = useState("")
    const [quote,setQuote] = useState(0)

    useEffect(()=>{
    const interval = setInterval(()=>{
        setQuote(quote=>quote+1)
    },2000)
    if(quote === Quotes.length){
        setQuote(0)
    }
    return ()=>{
        clearInterval(interval)
    }
    },[quote])

    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((data)=>{
            setItem(data.meals)
            setShow(true)
        })
    },[url])

    const setIndex = (alphabet)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`)
    }

    function searchRecipe(e) {
        if(e.key === "Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

  return (
    <div className='main'>
        <div className='heading'>
            <h1>Search Your Food Recipe</h1>
            <h3 style={{width:'100%',height:'50px',marginTop:'1rem'}}>{Quotes[quote]}</h3>
        </div>
        <div className='searchBox'>
            <input type="search"  className='search-bar' onChange={(e)=>setSearch(e.target.value)}  onKeyPress={searchRecipe} />
        </div>
        <div className='container'>
            {
                show ? <MealItem data={item}/> : null
            }
        </div>
        <div>
            <Recipeindex alphaIndex={(alpha)=>setIndex(alpha)}/>
        </div>
    </div>
  )
}

export default Meal