import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.js';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // cleanup
  }, []);


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert('Logged out successfully');
        navigate('/login');
      })
      .catch((error) => {
        alert('Error logging out: ' + error.message);
      });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">TransLingo</Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="auth-buttons">
        {user ? (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        ) : (
          <>
            <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
            <button className="signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
