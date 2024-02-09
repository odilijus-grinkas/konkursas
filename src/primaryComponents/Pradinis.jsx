import Header from "../sharedComponents/Header"
import {Outlet} from "react-router-dom"

export default function Pradinis(){
  return(
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}