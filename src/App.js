import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'components/Login';
import Register from 'components/Register';
import Dashboard from 'components/Dashboard';
import AddNote from 'components/AddNote';
import EditNote from 'components/EditNote';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/edit-note" element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
