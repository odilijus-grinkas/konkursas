import { Link } from "react-router-dom";

export default function Miestai() {
  const places = JSON.parse(localStorage.getItem("places"));
  
  return (
    <div>
      {places.map((place, index) => (
        <Link className="text-decoration-none" key={index} to={`/vienas/:${place.name}`}>
          {place.name}{' '}
        </Link>
      ))}
    </div>
  );
}
