import React from 'react';
import NavBar from './components/navBar';
import { Route, Routes } from 'react-router-dom';
import FirstLevel from './components/1level';
import SecondLevel from './components/2level';

function App() {
  return (
    <div className="container-md m-5">
      <header>
        <NavBar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/2level" element={<SecondLevel />} />
          <Route path="/" element={<FirstLevel />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
