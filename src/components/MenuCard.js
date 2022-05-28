import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <div className="container text-center">
      <div className="row">
    {
        menuData.map((currentElem)=>{
            return (
                <>
      <div className="col-md-4"> 
     <div className="card" style={{ width: "18rem", margin:'50px' }}>
    <img className="card-img-top" src="https://th.bing.com/th/id/OIP.SCyu6dthbIIEVJ-lPePx8gHaE7?pid=ImgDet&rs=1" alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{currentElem.name}</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="https://th.bing.com/th/id/OIP.SCyu6dthbIIEVJ-lPePx8gHaE7?pid=ImgDet&rs=1" className="btn btn-primary">
        Order Now
      </a>
    </div>
  </div>  
  </div>            
     </>
            )
        })
    }
    </div>
 </div>
    </>
  )
}

export default MenuCard