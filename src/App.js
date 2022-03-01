import React from 'react';
import './App.css';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Todo from './Todo';


function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}
export default App;
