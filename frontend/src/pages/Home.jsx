import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
      const [data, setData] = useState([])
      async function fetchData() {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/get-employee`);
            const parsedResponse = await response.json();
            console.log(parsedResponse.data);
            setData(parsedResponse.data);
        } catch (error) {
            console.log(error)
        }
        
      }
      useEffect(() =>{
        fetchData()
      },[])
  return (
    <section className='bg-black w-full h-screen text-white'>
        <div className='flex w-10/12 mx-auto py-4 px-1 justify-between items-center'>
            <div>
                <h2 className='text-lg font-bold font-mono'>Employees</h2>
                <p className='text-sm mt-1'>This is a list of all employees. You can add new employees, edit or delete existing ones.</p>
            </div>
            <Link to='/add'>
                <button className='py-2 px-3 bg-blue-700 rounded-lg'>Add Employee</button>
            </Link>
        </div>
        <div className=' w-10/12 mx-auto  rounded-lg bg-gray-800 text-gray-400 ' >
            <div className=' w-full flex justify-between py-4 text-center'>
                <div className='w-1/3 border-r border-slate-300'>Employee</div>
                <div className='w-1/3 border-r border-slate-300'>Title</div>
                <div className='w-1/3'>Role</div>
            </div>
        </div>
        
        <div className='w-10/12 mx-auto'>
            {
                data?.map((p) => (
                    <div className='w-full mt-2 rounded-lg bg-gray-900 ' key={p._id}>
                        <div className='flex justify-between  py-3 '>
                            <div className='w-1/3  border-r border-slate-500 flex gap-x-5 items-center'>
                                <img src={p.image} className='h-10 w-10 ml-4 rounded-full object-cover'/>
                                <div>
                                    <p className='text-slate-100'>{p.name}</p>
                                    <p className='text-slate-300'>{p.email}</p>
                                </div>
                            </div>
                            <div className='w-1/3 border-r border-slate-500 text-center'>
                                <p className='text-slate-100'>{p.title}</p>
                                <p className='text-slate-300'>{p.department}</p>
                            </div>
                            <div className='w-1/3 text-center my-auto'>{p.role}</div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </section>
  )
}

export default Home