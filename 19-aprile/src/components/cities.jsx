const data = ["Milano", "Roma", "Palermo", "Trieste", "Domodossola"];

const Cities = (props) => {
    const cityChange = (event) => {
        const selected = event.target.value;
        props.notify(selected);
    };

  return (
    <section>
      <select onChange={cityChange}>
        {data.map((item, index) => (
            <option key={index} value={item.toLowerCase()}>{item}</option>
        ))}
      </select>
    </section>
  );
};

export { Cities };
