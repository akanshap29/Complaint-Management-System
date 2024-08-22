import React, {useState} from 'react'
import {useNavigate, Link, redirect} from 'react-router-dom'
import axios from 'axios'
import bgImage from './bgImage.jpg'


function Login () {
  
  const [role,setRole] = useState('');
  const [email,setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    const handleLogin= async (e) => {

      e.preventDefault();
      
      if(!role){
        alert("Please select a role.");
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/login', { email, password, role });
        if (response.data === "Login Successfully") {
            if (role === 'admin') {
                navigate('/Admin_Dashboard');
            } else if (role === 'student') {
                navigate('/Student_Dashboard');
            }
        } else {
            alert(response.data);
        }
    } catch (error) {
        alert("Error logging in");
    }

      // if(role==='admin'){
      //   navigate('/Admin_Dashboard');
      // }
      // else if( role==='student'){
      //   navigate('/Student_Dashboard');
      // }
    };


  return (
    <>
    <div className="w-full h-screen flex justify-center items-center  " style={ {backgroundImage: `url(${bgImage})`,backgroundSize:'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="flex flex-wrap  justify-center    border-2 border-slate-500 bg-slate-200 w-60 h-60 rounded-xl">
      

      <div className="flex h-8 w-full gap-2 mr-2 ml-2 mt-2">
      <button onClick={()=> setRole("admin")} className={"bg-red-500 text-white rounded-md w-full hover:bg-red-700 active:bg-blue-600 "} >Admin</button>
      <button onClick={()=> setRole("student") } className={"bg-red-500 text-white rounded-md w-full  hover:bg-red-700 active:bg-blue-600 "} > Student </button>
      </div>

      <form onSubmit={handleLogin}>
        
        <div >
          <label className="block text-gray-700 font-bold " htmlFor="email" >Email</label>
          < input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold " htmlFor="password" >Password</label>
          < input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required 
          />
        </div>
        

      </form>

      <button onClick={handleLogin} >
      <div className="flex font-medium justify-center bg-yellow-200 hover:bg-yellow-400 hover:font-semibold active:bg-slate-400  w-40 h-8 items-center rounded-xl mr-2 ml-2 mt-2">
        Login
      </div>
      </button>

      <div className=" w-full h-10 ">
        <p className="text-center text-sm " >Don't have an account? <Link to='/signup' className=" font-semibold text-blue-500 hover:text-blue-700 hover:font-bold">SignUp
        </Link>
        </p>
      </div>
      
      </div>
    </div>
    </>
  )
}

export default Login
