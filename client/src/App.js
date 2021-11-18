import './App.css';
import Main from './components/Main';
import Form from './components/Form';
import Edit from './components/Edit';
import Detail from './components/Detail';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';


function App() {
  return (
    <div className="container my-4">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/pets/new" element={<Form/>} />
          <Route path="/pets/:id" element={<Detail/>} />
          <Route path="/pets/:id/edit" element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
