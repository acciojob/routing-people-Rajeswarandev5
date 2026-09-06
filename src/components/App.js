import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import UserList from "./userList";
import UserDetails from "./userDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;