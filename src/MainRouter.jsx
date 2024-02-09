import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Importing components which each URL loads up.
import Miestai from "./primaryComponents/Miestai";
import Pasirinkti from "./primaryComponents/Pasirinkti";
import Pradinis from "./primaryComponents/Pradinis";
import VienasMiestas from "./primaryComponents/BigCities";


// Creating routes leading to the primary pages, as well as 404 page
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Pradinis/>}>
        <Route path="/miestai" element={<Miestai/>} />
        <Route path="/pasirinkti" element={<Pasirinkti/>} />
        <Route path="/vienas/:miestas" element={<VienasMiestas/>}/>
      </Route>
      <Route path="/*" element={<h1>404 puslapis neegzistuoja 😟</h1>} />
    </>
  )
);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}