import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleLogin = async () => {
    if (!credentials.email || !credentials.password) {
        alert('Please enter both email and password.');
        return;
      }
    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      const token = response.data.token;
      console.log('User logged in successfully with token:', token);

      localStorage.setItem('token', token);

      router.push('/GIF'); 
    } catch (error) {
      console.error('Error logging in:', error.response?.data?.error || 'Unknown error');
      router.push("/")
      setCredentials({ email: '', password: '' });
      alert("Wrong Username or Password please Try again")
    }
  };

  return (
    <div>
      <h3>Login! One last step to us</h3>
      <form method='post'>
        <input
          type='email' 
          placeholder='Email'
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type='button' onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
