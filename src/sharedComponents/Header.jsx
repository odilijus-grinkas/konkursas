import {Link} from "react-router-dom"

export default function Header(){
  return(
    <>
      <header>
        <h1>
          <Link to="/">„Orai Lietuvoje“</Link>
        </h1>
      </header>
      <nav>
        <Link to="/miestai">Miestai</Link>
        <Link to="/pasirinkti">Pasirinkti Miestai</Link>
      </nav>
    </>
  )
}