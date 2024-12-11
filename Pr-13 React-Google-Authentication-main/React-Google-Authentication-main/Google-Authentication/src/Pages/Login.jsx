import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from '../firebaseConfige';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let user = await signInWithPopup(auth, googleAuthProvider);
      navigate('/add');
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row col-5 mx-auto rounded m-5 p-5" style={{backgroundImage:"url('https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2')"}}>
          <h1 style={{fontSize:"35px", textAlign:"center",paddingBottom:"20px"}}>Sine in With Google in React</h1>
          <div className="button" align = "center">
            <button onClick={() => handleLogin()} className='btn btn-primary'>Sign in With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
