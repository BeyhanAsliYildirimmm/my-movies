import React from "react";
import  ReactDOM  from "react-dom";
import App from "./components/App";
import { createRoot } from 'react-dom/client';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/*
ReactDOM.render(<App />, document.getElementById('root'));
*/


const root = createRoot(document.getElementById('root'));
root.render(<App />);