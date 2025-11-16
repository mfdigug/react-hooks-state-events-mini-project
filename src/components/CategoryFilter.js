import React from "react";

function CategoryFilter( {categories, onHandleFilterClick} ) {

function handleFilterClick(id){
  onHandleFilterClick(id)
}

const  categoryButtons = categories.map((category) => {
        return (
          <button 
          key={category} 
          onClick={() => handleFilterClick(category)}>
            {category}
          </button>
        )
})


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
