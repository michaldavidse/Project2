import {React} from 'react'
import { Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <button className="navbar-toggler p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <div className="navbar-nav ">
          <Link className="nav-link p-2 rounded-3" activeClassName="active" to="/posts">Posts</Link>
          
          <Link className="nav-link p-2 rounded-3" activeClassName="active"  to="/create">Nieuw artikel</Link>

          <Link className="nav-link p-2 rounded-3" activeClassName="active"  to="/aboutme">About me</Link>

    </div>
  </div>
</div>
</nav>
</header>



  )
}


