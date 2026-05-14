import React from 'react'
import './FilterBar.css';

function FilterBar({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="filter-bar">
      {categories.map(cat => (
        <button
          key={cat}
          className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default FilterBar