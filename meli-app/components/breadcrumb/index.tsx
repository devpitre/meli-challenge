import MainContext from '@contexts/main-context';
import React, { useContext } from 'react';

function BreadCrumb() {
  const { categories } = useContext(MainContext);
  
  return categories.length ? (
    <div className="flex flex-row gap-1">
      {categories.map((category, index) => (
        <span key={category} className="text-gray-200 text-sm">
          {category} {index < (categories.length - 1) && '>'}
        </span>
      ))}
    </div>
  ) : null;
}

export default BreadCrumb;
