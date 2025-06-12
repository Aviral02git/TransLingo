// // src/pages/Signup.jsx
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/firebase.js';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert('Signup successful!');
//       navigate('/'); // Redirect to home page
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <h2>Signup</h2>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.js'; 
import { useNavigate, Link } from 'react-router-dom'; 

import './Signup.css'; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      navigate('/'); 
    } catch (error) {
      alert(error.message); 
    }
  };

  return (
    <div className="auth-container"> 
      <div className="auth-card"> 
        <h2>Sign Up</h2> 
        <form onSubmit={handleSignup} className="auth-form"> 
          <div className="form-group"> 
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link> 
        </p>
      </div>
    </div>
  );
}

export default Signup;
