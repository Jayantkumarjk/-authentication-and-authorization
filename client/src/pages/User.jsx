import axios from 'axios'
import React, { useEffect, useState } from 'react'
//axios.defaults.withCredentials = true;

function User() {
    const[user,setUser] = useState("");
    const sendRequest = async() =>{
      
      let result = await fetch(`http://localhost:5000/api/user`)
      result = await result.json();
      setUser(result.message)
      console.warn(result.message)
  }
/*
    const sendRequest = async () => {
        const res = await axios.get("http://localhost:5000/api/user",{
            withCredentials:true
        })
        const data = await res.data;
        setUser(data.message)
    };
*/
    useEffect(()=>{
        sendRequest()
    },[])
  return (
    <div className='flex justify-center items-center h-[80vh]'>{user && <h1>welcome {user.name}</h1>}</div>
  )
}

export default User