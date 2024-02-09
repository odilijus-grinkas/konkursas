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
        <ul>
          <li>
            <Link to="/miestai">Miestai</Link>
          </li>
          <li>
            <Link to="/pasirinkti">Pasirinkti Miestai</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}