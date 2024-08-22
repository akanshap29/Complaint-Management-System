import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import bgImage from './bgImage.jpg'

function SignUp () {
  const [Name,setName]= useState('');
  const [role,setRole] = useState('');
  const [email,setEmail]= useState('');
  const [password, setPassword]= useState('');
  const navigate = useNavigate();

    const handleSign= async (e) => {

      e.preventDefault();
      
      if(!role){
        alert("Please select a role.");
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/signup', { role,Name,email, password  });
            alert(response.data);
            navigate('/');
        
      } catch (error) {
        alert(error.response.data);   
      }

    };

    

  return (
    <>
    <div className="w-full h-screen flex justify-center items-center " style={ {backgroundImage: `url(${bgImage})`,backgroundSize:'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="flex flex-wrap justify-center bg-white w-60 h-80 rounded-xl">
      

      <div className="flex h-8 w-full gap-2 mr-2 ml-2 mt-2">
      <button onClick={()=> setRole("admin")} className={"bg-red-500 text-white rounded-md w-full hover:bg-red-700 active:bg-blue-600"} >Admin</button>
      <button onClick={()=> setRole("student") } className={"bg-red-500 text-white rounded-md w-full hover:bg-red-700 active:bg-blue-600"} > Student </button>
      </div>

      <form onSubmit={handleSign}>
      <div >
          <label className="block text-gray-700 font-bold " htmlFor="Name" >Name</label>
          < input
          type="text"
          id="Name"
          placeholder="Enter your name"
          value={Name}
          onChange={(e)=> setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
          />
        </div>
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

      <button onClick={handleSign} >
      <div className="flex  justify-center bg-yellow-200 hover:bg-yellow-400 hover:font-semibold active:bg-slate-400 font-semibold w-40 h-8 items-center rounded-xl mr-2 ml-2">
        Signup
      </div>
      </button>

      <div className="">
                        <p className="text-center text-sm ">
                            Already have an account? <Link to="/" className="text-blue-500 font-medium hover:text-blue-700 hover:font-bold">Login</Link>
                        </p>
                    </div>
      
      </div>
    </div>
    </>
  )
}

export default SignUp
