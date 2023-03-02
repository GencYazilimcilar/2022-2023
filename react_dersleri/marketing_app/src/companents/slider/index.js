import React from 'react'

export default function Slider(props) {
    let kategories=props.kategories;
    let selectedMenuItem=props.selectedMenuItem;
  return (
    <div>
        <ul className='list-group'>
            {
                kategories.map((item)=>(
                    <li key={item} onClick={()=>{props.setSelectedMenuItem(item)}} className={selectedMenuItem==item?'list-group-item active':'list-group-item'}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}
