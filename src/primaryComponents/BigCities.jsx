export default function VienasMiestas() {
  const places = JSON.parse(localStorage.getItem("places"));
  
  const placesSentence = places.map(place => place.name).join(', ');

  return (
    <div>
      <p>{placesSentence}</p>
    </div>
  );
}
