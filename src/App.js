import React, { useState, useEffect } from 'react';
import Menu from './components/Menu.js';
import Categories from './components/Categories.js';
import Data from './components/Data.js';

const allUniqueCategories = ['all', ...new Set(Data.map(item => item.category))];
function App() {
  const [items, setItems] = useState(Data);
  const [categories, setCategories] = useState(allUniqueCategories);
  useEffect(()=>{
    setCategories(allUniqueCategories)
  },[])
  const filterMenuItems = (category) => {
    if (category === 'all') {
      return setItems(Data);
    }
    const newItems = Data.filter((item) => item.category === category);
    setItems(newItems);

  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline "></div>
        </div>
        <Categories category={categories} filterItems={filterMenuItems} />
        <Menu items={items} />
      </section>
    </main>
  );
}
export default App;
