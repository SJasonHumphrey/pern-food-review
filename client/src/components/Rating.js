import React from 'react'
import { ImStarHalf } from "react-icons/im"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Rating = ({rating}) => {
    const stars = [];
    for (let i = 1; i <= 5; i++){
        if(i <= rating){
            stars.push(<AiFillStar/>)
        } else {
           stars.push(<AiOutlineStar/>) 
        }
    }
  return (
    <>
       {stars}
    </>
  )
}

export default Rating;