import React  from 'react';
import "./Singleproduct.css";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppContext } from '../Context/ProductContext';
import SingleproductData from './SingleproductData';
import AllproductAPI from '../AllproductAPI';


let API = "http://localhost:3000/product";
// let API = "http://localhost:3000/singleproduct";

const Singleproduct = () => {
  const {id} = useParams();
  const {getSingleProduct,SiingleProdctData} = useAppContext();

  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
  },[])

  return (
    <>
    {
      SiingleProdctData.map((curElem,index)=>{
        return(
          <div key={index}>
         <SingleproductData stock={curElem.stock}  title={curElem.titel} price={curElem.price} imgsrc={curElem.imgsrc} id={curElem.id}
          product={SiingleProdctData}/> 
          </div>
        )
      })
    }
    
      
    </>
  )
}

export default Singleproduct
