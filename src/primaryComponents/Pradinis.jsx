import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";

export default function Pradinis() {
  // For creating an expiration timestamp, takes number of hours
  function setExpiration(hours) {
    const curDate = new Date().getTime(); // current timestamp
    const hoursInMilli = hours * 60 * 60 * 1000; // in milliseconds
    const expiry = curDate + hoursInMilli;
    return expiry;
  }

  function isExpired(expirationDate) {
    const curDate = new Date().getTime(); // timestamp
    return expirationDate < curDate;
  }
  async function getMiestaiData(miestai){
    const data = [];
    for (let miestas of miestai){
      const oras = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/${miestas}/forecasts/long-term`)
      data.push(
        {miestas, oras}
      )
    }
    return data;
  }
  async function getPlaces(){
    const places = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places`);
    const json = await places.json();
    const lt = [];
    for (let e of json){
      if (e.countryCode == "LT"){
        lt.push(e);
      }
    }
    return lt;
  }
  // async function setItems() {
  //   try {
  //     const timeItem = {
  //       expiration: setExpiration(12),
  //     };
  //     let places = await JSON.stringify(getPlaces());
  //     console.log("0000000000");
  //     console.log(places);

  //     localStorage.setItem("time", JSON.stringify(timeItem));
  //     localStorage.setItem("places", places);
  //   } catch (error) {
  //     console.error('Error fetching or storing data:', error);
  //   }
  // }
  async function setItems() {
    try {
      const timeItem = {
        expiration: setExpiration(12),
      };
      const places = await getPlaces(); // Await the result of getPlaces() function
      console.log("0000000000");
      console.log(places);
  
      localStorage.setItem("time", JSON.stringify(timeItem));
      localStorage.setItem("places", JSON.stringify(places)); // Stringify the result
    } catch (error) {
      console.error('Error fetching or storing data:', error);
    }
  }  

  function storeMiestaiData(miestai){
    localStorage.setItem("miestuOrai", JSON.stringify(getMiestaiData(miestai)))
  }

  function removeItems() {
    localStorage.removeItem("time");
  }

  // Run everything while keeping component in sync with data
  useEffect(() => {
    // removeItems();
    // retrieve orai from localStorage
    const orai = localStorage.getItem("time");
    if (orai === null || isExpired(JSON.parse(orai).expiration)) {
      console.log("No items or items expired.");
      removeItems();
      setItems();
    }
    console.log(localStorage.getItem("places"))
  }, []); 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
