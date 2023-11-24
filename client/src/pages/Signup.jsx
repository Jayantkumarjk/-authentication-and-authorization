import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate( name,email,password);


    const handleSignup = async() => {
        console.warn(name,email,password)
        const res = await axios.post("http://localhost:5000/api/signup", {
            name,email,password
        })
        const data = await res.data;
        console.log(data)
        navigate("/login")
    }
  return (
    <div className='flex flex-col gap-3 rounded-md shadow-md w-fit p-3 mx-auto my-[30vh] '>
    <input type="text" name="name" id="name" placeholder='Enter your name'  className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
    value={name} onChange={(e)=>setName(e.target.value)} />


    <input type="email" name="email" id="email" placeholder='Enter your Email' className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
    value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" name="password" id="password" placeholder='Enter your Password' className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none '
    value={password} onChange={(e)=>setPassword(e.target.value)} />
    <button type="submit" className='px-3 py-2 bg-purple-500 rounded-full text-white shadow-md' onClick={handleSignup}>Login</button>
</div>
  )
}

export default Signup