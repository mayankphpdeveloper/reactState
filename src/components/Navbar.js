import React from 'react'

const Navbar = ({filterItems , updatedList}) => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="www.google.com">
    MacD Restaurent
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    {
     updatedList.map((type) =>{
      return (
        
        <>
        <li className="nav-item">
      <button className="nav-link" style={{background: 'none', border: 'none'}}
         onClick={()=>filterItems(type)}>
          {type}
        </button>
      </li>
        </>
      )
      })
    }
    </ul>
  </div>
</nav>
  </>

  )
}

export default Navbar