import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../src/firebase';
import { useRouter } from 'next/router'; 
import Link from 'next/link';
import './Login.css'
import Login from "./Login"
import Register from './Register';
import { FaGoogle } from 'react-icons/fa';


const SignIn = () => {
  const router = useRouter(); 

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect to the home page after successful sign-in
      router.push('/GIF');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div className="overlay">
    <div className='main'>
      
    <div className='containerMain'>
    <h1>Login to Your Account</h1>
        <p>Choose from 13000+ online Gifs and images with new addition published every months</p>

<div className="container2">
<div className='old'>
            <Login/>
        </div>
        <div className='new'>
            <Register/>
            <button  className="google" onClick={signInWithGoogle}>
            <FaGoogle className="google-icon" />
            Sign in with Google</button>
        </div>
      
        
</div>
      
        
    </div>
    <Link  className="home" href="/">Home</Link>
      
      
     
      
    </div></div>
  );
};

export default SignIn;
