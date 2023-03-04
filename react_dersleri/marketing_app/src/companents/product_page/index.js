import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import {getData} from '../data';
export default function Index(props) {
    let {productId} = useParams();
    const [product,setProduct]=React.useState();
    const getDataFunk=async()=>{
        let data=await getData('http://localhost:3005/products');
        if(data){
          setProduct(data);
        }
      }
    useEffect(()=>{
        getDataFunk();
    },[]);
    const getContent=()=>{
        return(
            <div></div>
        );
    }
  return (
    <div>
        {
            (productId && product)?getContent:<div>Yükleniyor...</div>
        }
    </div>
  )
}
