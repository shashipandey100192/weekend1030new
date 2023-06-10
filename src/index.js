import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Myabout, { Myabout1, Myabout2, Myconditional } from './about';
import Myreactpage from './reactbootstrappage/Myreactpage';
import Uimetrial from './reactbootstrappage/Uimetrial';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myabout></Myabout>
    <Myabout1></Myabout1>
    <Myabout2></Myabout2>
  <Myconditional></Myconditional>
  <Myreactpage></Myreactpage>
  <Uimetrial></Uimetrial>
  </React.StrictMode>
 
);

