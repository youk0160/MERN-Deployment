import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/Main';
import Form from './components/Form';
import Edit from './components/Edit';
import Detail from './components/Detail';
import Header from './components/Header';
import Footer from './components/Footer';
import Admin from './components/Admin';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/request" element={<Form/>} />
          <Route path="/serviceReqs" element={<Admin/>} />
          <Route path="/serviceReqs/:id" element={<Detail/>} />
          <Route path="/serviceReqs/:id/edit" element={<Edit/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
