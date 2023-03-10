import Navi from '../navi';
import Slider from '../slider';
import Content from '../content';
import React from 'react';
import {getData} from '../data';
import ProductsConsumer from '../contextApi/productsContextApi';
function App() {
  const [control,setControl]=React.useState(false);
  const [categoryControl,setCategoryControl]=React.useState(true);
  const getDataFunk=async(dispatch)=>{
    let data=await getData('http://localhost:3005/products');
    if(data){
      dispatch({type:'setProducts',payload:data});
      setControl(true);
    }
  }
  const getCategory=(getCategories)=>{
    getCategories();
    setCategoryControl(false);
  }
  return (
    <ProductsConsumer>
      {
        values=>{
          const {products,getCategories,dispatch}=values;
          if(!control){
            getDataFunk(dispatch);
          }
          return(
            <div>
              {(products.length>0 && categoryControl) && getCategory(getCategories)}
              <Navi/>
              <div className='row px-5 py-4'>
                <div className='col-md-3 my-3'>
                  <Slider/>
                </div>
                <div className='col-md-9 my-3'>
                  <Content/>
                </div>
              </div>
            </div>
          );
        }
      }
    </ProductsConsumer>
  );
}

export default App;
