export function Card(props) {
  const upper = props.country.toUpperCase();

  return (
    <div className="container">
      <div className="coverImg">
        <img src={props.item.coverImg} alt="a cover image of a place" />
      </div>
      <div className="info">
        <div className="country--map">
          <img src="https://img.icons8.com/ios-filled/50/33a17c/visit.png" />
          <p className="country">{upper}</p>
          <a href="#" id="maps1">
            View on Google maps
          </a>
        </div>
        <h1 className="location bold">{props.item.location}</h1>
        <div className="date--description">
          <p className="date bold">{props.item.date}</p>
          <p className="description">{props.item.description}</p>
          <a href="#" id="maps2">
            View on Google maps
          </a>
        </div>
      </div>
    </div>
  );
}

