import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className = 'error-page d-flex justify-content-center align-items-center'>
      <div>
        <h1 className = 'heading'>404</h1>
        <h2 className = 'heading mb-5'>page not found</h2>
        <Link to="/portfolio" className="btn btn-primary">return home</Link>
      </div>
    </div>
  )
}
export default Error;
