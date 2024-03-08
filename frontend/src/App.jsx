import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import SignIn from './Components/SignIn';
import Home from './Components/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App