import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesList } from '../selectors.js';

export default function CategorySelector({ selectedCategoryId, onSelectCategory, onNewCategoryChange, categoryName, onAddCategory }) {
  const categories = useSelector(selectCategoriesList);

  const options = useMemo(
    () => [
      { id: 'all', name: 'All Categories' },
      ...categories.map((category) => ({ id: category.id, name: category.name })),
    ],
    [categories]
  );

  return (
    <section className="add-card">
      <h2>Categories</h2>
      <label>
        Filter by category
        <select value={selectedCategoryId} onChange={(event) => onSelectCategory(event.target.value)}>
          {options.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <form onSubmit={onAddCategory} className="category-form">
        <label>
          New category
          <input
            value={categoryName}
            onChange={(event) => onNewCategoryChange(event.target.value)}
            placeholder="Add category"
          />
        </label>
        <button type="submit">Add category</button>
      </form>
    </section>
  );
}
