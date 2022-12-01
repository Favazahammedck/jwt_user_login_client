import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "../src/privateRoute/PrivateRoute";

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>}/>

</Routes>
   </BrowserRouter>
  );
}

export default App;
