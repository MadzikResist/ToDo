import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'components/forms/Login';
import Register from 'components/forms/Register';
import Dashboard from 'components/dashboard/Dashboard';
import AddNote from 'components/note/AddNote';
import EditNote from 'components/note/EditNote';
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
