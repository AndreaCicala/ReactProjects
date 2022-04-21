import { useState, useEffect } from "react";
import { Product } from "./product";

const product = ["prodotto 1", "prodotto2", "prodotto3"];

export const List = () => {
  const [products, setProducts] = useState(product);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <ul className="grid">
        {products.map((item, index) => (
          <li key={index}>
            <Product
              price={item.price + "€"}
              title={item.title}
              image={item.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
