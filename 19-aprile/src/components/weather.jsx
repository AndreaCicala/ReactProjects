
const Weather = (props) => {
    const location = props.location || "seleziona una città";
    const temp = props.temp || 0;
    const status = props.status || "N/A";
    const icon = props.icon || null;
    const imgUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;

    const tempConverter = () => {
        let kelvinVal = parseFloat(temp);
        return Math.round(kelvinVal - 273.15);
    }

    return (
        <section>
            <ul className="list">
                <li>Location: {location}</li>
                <li>Temperatura: {tempConverter()} °C</li>
                <li>Condizione: {status}</li>
            </ul>
            <img className="image" src={imgUrl} alt="weather"></img>
        </section>
    )
}

export { Weather }