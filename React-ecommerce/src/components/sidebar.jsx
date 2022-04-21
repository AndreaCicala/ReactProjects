import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3", "category 4"];

export const Sidebar = (props) => {
  const [categories, setCategories] = useState(mock);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    data.unshift("everything");
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const clicked = (event, category) => {
    event.preventDefault();
    // console.log(category)
    props.catSelection(category);
  };

  return (
    <aside>
      <h2>Categories</h2>
      <ul>
        {/* <li>
        <a href="/everything">Everything</a>
      </li> */}
        {categories.map((item, index) => (
          <li key={index}>
            <a href={item} onClick={(event) => clicked(event,item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
