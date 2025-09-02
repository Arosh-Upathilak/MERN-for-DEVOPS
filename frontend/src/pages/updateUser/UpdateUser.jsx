import React, { useEffect, useState } from 'react'
import './UpdateUser.css'
import { Link ,useNavigate,useParams} from "react-router-dom";
import axios from "axios"
import toast from 'react-hot-toast';


function UpdateUser() {
    const {id} =useParams()

    const user ={
        name:"",
        email:"",
        password:""
    }

    const [data,setData] =useState(user)
    const navigator =useNavigate();
    const inputHandler =(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

    useEffect(()=>{
            axios.get(`${process.env.REACT_APP_API_URL}get-user/${id}`)
            .then((res)=>{
                setData(res.data.data)
            })
            .catch((error)=>console.log(error))
        },[id])
    
    const onsubmitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`${process.env.REACT_APP_API_URL}update-user/${id}`,data)
        .then((res)=>{
            toast.success(res.data.message,{position:"top-right",autoClose: 3000})
            navigator("/")
            
        })
        .catch((error)=>console.log(error))  
    }



  return (
    <div className='adduser'>
        <Link to='/'><button type="button" className="btn btn-secondary">Back <i className="fa-solid fa-backward"></i></button></Link>
        <h2>Update User</h2>
        <form className='adduser-form' onSubmit={onsubmitForm}>
            <div className='input'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={data.name} onChange={inputHandler} autoComplete='off' placeholder='Enter your name'/>
            </div>
            <div className='input'>
                <label htmlFor='email'>Email:</label>
                <input type='text' id='email' name='email' value={data.email} onChange={inputHandler} autoComplete='off' placeholder='Enter your email'/>
            </div>
            <div className='input'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' value={data.password} onChange={inputHandler} autoComplete='off' placeholder='Enter your password'/>
            </div>

            <div className='input'>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateUser
