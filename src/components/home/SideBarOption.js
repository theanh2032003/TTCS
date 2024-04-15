import React from 'react'
import "./SidebarOption.css"

const SideBarOption = ({active, text, Icon, onClick}) => {

  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`} onClick={onClick} >
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SideBarOption;