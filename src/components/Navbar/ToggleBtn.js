import React from 'react';
import {FaBars} from 'react-icons/fa';
const ToggleBtn = ({clicked}) => {
  return (
    <div className = 'toggle-btn d-flex justify-content-center align-items-csenter'>
      <button className = 'nav-btn d-sm-none' onClick = {clicked}>
        <FaBars className = 'nav-icon'/>
      </button>
    </div>
  );
}
export default ToggleBtn;