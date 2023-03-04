import Navi from '../navi';
import Slider from '../slider';
import Content from '../content';
import React,{useEffect} from 'react';
import {getData} from '../data';
function App() {
  const [products,setProducts]=React.useState([]);
  const getDataFunk=async()=>{
    let data=await getData('http://localhost:3005/products');
    if(data){
      setProducts(data);
    }
  }
  useEffect(
    ()=>{
    getDataFunk();
  },[]);
  const [selectedMenuItem,setSelectedMenuItem]=React.useState();
  const [kategories,setKategories]=React.useState([]);
  if(kategories.length==0){
    let gecici=[];
    products.forEach((item)=>{
      let currentItemCategory=item.category;
      let control=false;
      gecici.forEach((item)=>{
        if(item==currentItemCategory){
          control=true;
        }
      });
      if(!control){
        gecici.push(currentItemCategory);
      }
    });
    let len=0;
    if(gecici.length>len){
      setKategories(gecici);
      len=gecici.length;
      setSelectedMenuItem(gecici[0]);
    }
  }
  
  return (
    <div>
      <Navi/>
      <div className='row px-5 py-4'>
        <div className='col-md-3 my-3'>
          <Slider kategories={kategories} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem}/>
        </div>
        <div className='col-md-9 my-3'>
          <Content selectedMenuItem={selectedMenuItem} products={products}/>
        </div>
      </div>
    </div>
  );
}

export default App;
