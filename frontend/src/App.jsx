import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import SignIn from './Components/SignIn';
import Home from './Components/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/signup" element={<Signup />} />
      <Route path="/users/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App