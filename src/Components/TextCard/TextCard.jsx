import React, { useState } from 'react'
import './TextCard.css'

export default ({mainText, mainTag, textIndex, handleSwipe, textListLength, cardColor, handleClick}) => {
    
    const getStorySquare = (total) => {
        let squareDiv = []
        for (var i = 0; i < total; i++) {
            const bgColor = i == textIndex ? cardColor : 'rgb(255,255,255,0.8)'
            squareDiv = [...squareDiv, 
            <div 
                className="text-card__story__square" style={{backgroundColor: bgColor }}> 
            </div>
            ]
         }
         return (squareDiv)
    }


    return (
        <div className='test' style={{backgroundColor: cardColor}}>
            <div className="text-card__story">
                {getStorySquare(textListLength)}
            </div>

            <div className="text-card__slide-btn">
                    <div 
                        onClick={()=>{
                            handleSwipe(textIndex > 0 ? textIndex-1 : 0)}}
                            className="text-card__left-btn"
                        ></div>
                    <div 
                        onClick={()=>{handleSwipe(textIndex < textListLength-1 ? textIndex+1 : textListLength-1 )}} 
                        className="text-card__right-btn"
                    ></div>
                </div>
            <div className="text-card">
                <h2 className="text-card__main-text">{mainText}</h2>
                <div className="text-card__btn-group">
                    <p className="text-card__main-tag">#{mainTag}</p>
                    <button className="text-card_inf-btn">+info</button>
                </div>
                <button onClick={()=>handleClick('')} className="text-card_inf-btn close">X</button>
            </div>
        </div>
    )
}