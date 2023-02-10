import React from 'react'
import ApicallData from './ApicallData'
import "./HomeMen.css"
import HomeMenAPI from './HomeMenAPI'


const HomeMenDressing = () => {
  return (
    <>
      {
        HomeMenAPI.map((curElem, index) => {
          return (
            <div key={index}>
              <ApicallData link={curElem.link} imgsrc={curElem.imgsrc} title={curElem.title} />
            </div>

          )
        })
      }


    </>
  )
}

export default HomeMenDressing
