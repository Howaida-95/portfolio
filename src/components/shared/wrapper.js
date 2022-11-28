import React from 'react';
const Container = ({children}) => {
  return ( 
    <div className = 'main'>
      <span className = 'tags top-tags'>&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>        
      <div className = 'container-fluid'>
        <div className = 'row'>{children}</div>
      </div>
      <span className = 'tags bottom-tags'>
        &nbsp;&nbsp;&nbsp;&lt;/body&gt;
        <br></br>
        &lt;/html&gt;
      </span>
    </div>
    );
}
export default Container;