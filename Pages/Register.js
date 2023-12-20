import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '' });
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', user);
      console.log('User registered successfully');
      router.push('/GIF'); 
    } catch (error) {
      console.error('Error registering user:', error.response?.data?.error || 'Unknown error');
  
      router.push('/');
    }
  };
  
  useEffect(() => {
    setUser({ name: '', email: '', phone: '', password: '' });
  }, []);

  return (
    <div>
      <h3>Create an Account</h3>
      <form method='post'>
        <input
          placeholder='name'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          placeholder='email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          placeholder='phone'
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button type='button' onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
