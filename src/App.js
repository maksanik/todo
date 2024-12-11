import React from 'react';
import './App.css';
import TodoPage from './pages/TodoPage';
import DndPage from './pages/DndPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/todo" element={<TodoPage />}/>
      <Route path="/dnd" element={<DndPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
