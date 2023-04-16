import React from "react";
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/home" className="pnf-btn">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Error;
