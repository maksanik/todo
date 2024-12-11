import React from 'react';
import './App.css';
import TodoPage from './pages/TodoPage';
import DndPage from './pages/DndPage';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<TodoPage />}/>
        <Route path="/dnd" element={<DndPage />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
