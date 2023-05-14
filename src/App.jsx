import { useEffect, useState } from 'react'
import './App.css';
import Navigation from './components/Navigation';
import Admin from './components/Admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase';


function App() {
  const [theUser, setTheUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setTheUser(user);
      }
    });
  }, []);


  return (
    <>
      <BrowserRouter>
        <Navigation user={theUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin user={theUser} />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
