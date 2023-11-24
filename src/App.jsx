import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import HomePage from "./Pages/Home/Home";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="" element={< />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
