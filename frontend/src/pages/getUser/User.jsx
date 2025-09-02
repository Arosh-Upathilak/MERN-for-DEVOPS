import React, { useEffect, useState } from 'react'
import './User.css'
import axios from "axios"
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fechdata = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}get-user`)
                setUser(response.data.data)

            } catch (error) {
                console.log("Error the while data feching", error)
            }
        }

        fechdata()
    }, [])

    const onDelete = async(userID)=>{
        await axios.delete(`${process.env.REACT_APP_API_URL}delete-user/${userID}`)
        .then((res)=>{
            setUser((pre)=>pre.filter((user)=>user._id!==userID))
            toast.success(res.data.message,{position:"top-right",autoClose: 3000})
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div className='userTable'>
            <Link to="/add-user"><button type="button" className="btn btn-primary">Add User <i className="fa-solid fa-user-plus"></i></button></Link>
            {user.length===0?
            <div className='nodata'>
                <h3>No data to dispaly</h3>
                <p>Please add the new USer</p>
            </div>:(
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((value,index) => {
                      return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td className='btn'>
                              <Link to={`/update/`+value._id}><button type="button" className="btn btn-info"><i className="fa-solid fa-pen-to-square"> </i></button> </Link>
                              <button type="button" onClick={()=> onDelete(value._id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button> 
                              </td>
                        </tr>
                      )
                    })}

                </tbody>
            </table> )}
        </div>
    )
}

export default User
