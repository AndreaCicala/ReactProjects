export const Product = (props) => {
  return (
    <article>
      <img className="image" src={props.image} alt="Fai finta che la vedi" />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </article>
  );
};
