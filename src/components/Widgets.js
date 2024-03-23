import React from 'react'
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import WidgetsOption  from './WidgetsOption';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Who to follow</h2>
        
        <WidgetsOption />

      </div>
    </div>
  )
}

export default Widgets