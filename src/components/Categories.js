import React from 'react'

function Categories({category,filterItems }) {
    return (
        <div className="btn-container">
      {
          category.map((item,index)=>(
              <button key={index} className="filter-btn" onClick={()=>filterItems(item)}>
                  {item}
              </button>
          ))
      }
        </div>
    )
}
export default Categories
