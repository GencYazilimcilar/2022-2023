import React from 'react'
export default function Content(props) {
    const getContent=()=>{
        let cards=props.products.map((item)=>{
            return (item.category==props.selectedMenuItem) && 
            <div key={item.id} className='col-md-4 px-3 py-3'>
                <div className="card" style={{width:"18rem;"}}>
                    <img src={item.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <button className='btn btn-primary'>Add to Card</button>
                    </div>
                </div>
            </div>
        });
        return cards; 
    }
  return (
    <div className='row'>
        {
            getContent()
        }
    </div>
  )
}
