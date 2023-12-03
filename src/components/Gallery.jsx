import { Link } from "react-router-dom";
import data from "../data/logements.json";

export default function Gallery() {
  return (
    <div className="gallery">
      {data.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id}>
          <div className="card" key={logement.id}>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
