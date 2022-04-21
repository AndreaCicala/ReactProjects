import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3", "category 4"];

export const Sidebar = () => {
  const [categories, setCategories] = useState(mock);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    setCategories(data);
    console.log(data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <aside>
      <h2>Categories</h2>
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <a href={item}>{item}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
