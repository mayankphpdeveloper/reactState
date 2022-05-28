import React  from 'react'
import { useState } from "react"
import Menu  from '../Menu';
import MenuCard from './MenuCard'
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((currentElem)=>{  // to get unique data with new Set
   
    return currentElem.category;
})
),
"All",
]


const Restaurent = () => {

    const [menuData, setMenuData] = useState( Menu);
    const [updatedList,setupdatedList] = useState(uniqueList);

    const filterItems = (category) => {
      if (category === 'All') {
        setMenuData(Menu);
        return;
      }
        const updatedList = Menu.filter((currentElem)=>{
        return  currentElem.category===  category;
      });
      setMenuData(updatedList);
    }
        
  return (
   <>
     <Navbar filterItems = {filterItems} updatedList = {updatedList} />
    <MenuCard menuData = {menuData}/>
    
   </>
  )
}

export default Restaurent