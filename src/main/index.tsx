import React from "react";
import ReactDOM from "react-dom/client"; 
import Login from "../presentation/pages/login/login";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('main')!); 
root.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>
);

export {};
