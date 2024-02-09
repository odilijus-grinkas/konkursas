async function miestoOrai(miestas){
  const data = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/${miestas}/forecasts/long-term`);
  return data;
}

export default function Orai({miestas}){
  return(
    miestoOrai
  )
}