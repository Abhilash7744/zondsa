import React from "react"
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png'
import { jwtDecode } from "jwt-decode";
import { client } from '../client'
import { stringify } from "uuid";


const Login=() => {
  const navigate = useNavigate();

  const responseGoogle = (response) =>{
    const decodedResponse = jwtDecode(response.credential);
    console.log(decodedResponse)
    localStorage.setItem('user', JSON.stringify(decodedResponse));

    const {email,name,picture,exp} = decodedResponse;

    // console.log(email,name,picture,exp)
    const doc =  {
      _id: exp.toString(),
      _type:"user",
      userName : name,
      image: picture,
    }
    client.createIfNotExists(doc)
      .then(()=>{
        navigate('/',{replace: true})
      })
  }
  return (
    <div className="flex justify-start items-center flex-col h-screen">
    <div className="relative w-full h-full">
      <video 
      src={shareVideo}
      type="video/mp4"
      loop
      controls={false}
      muted
      autoPlay
      className="w-full h-full object-cover"
      />

      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} alt="logo" width='130px' />
        </div>

        <div className="shadow-2xl">
        <GoogleLogin
        onSuccess={(response) => {
          responseGoogle(response);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login