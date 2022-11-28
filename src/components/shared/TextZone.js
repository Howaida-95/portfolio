import React from 'react';
const TextZone = ({children}) => {
  return (
    <div className = 'col-lg-6'>
      <div className = 'col-center'>
        {children}
      </div>  
    </div>
  );
}

export default TextZone;