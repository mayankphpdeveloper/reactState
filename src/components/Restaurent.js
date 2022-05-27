import React from 'react'

const Restaurent = () => {
  return (
   <>
   <div className="card" style={{ width: "18rem" }}>
    <img className="card-img-top" src="https://th.bing.com/th/id/OIP.SCyu6dthbIIEVJ-lPePx8gHaE7?pid=ImgDet&rs=1" alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="https://th.bing.com/th/id/OIP.SCyu6dthbIIEVJ-lPePx8gHaE7?pid=ImgDet&rs=1" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
   </>
  )
}

export default Restaurent