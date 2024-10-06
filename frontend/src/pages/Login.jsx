import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    department: "",
    role: ""
  })
  const navigate = useNavigate();

  function formHandler(e){
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  async function submitHandler(e){
    e.preventDefault();
    console.log(formData);
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/create-employee`,{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    const response = await res.json();
    console.log("Recieved response");
    console.log(response);

    navigate("/")
  }
  return (
    <div className='h-screen bg-black text-white grid grid-cols-2'>
        <div className=''>
          <img
              className="relative h-full w-full object-cover object-top "
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className=' absolute inset-0 bg-gradient-to-t from-black to-transparent h-full w-1/2'></div>
        </div>
        <div className='flex justify-center items-center py-24 px-8 w-3/5 mx-auto'>
          <div >
            <h1 className='text-4xl font-bold mb-3'>Create an Employee</h1>
            <div className='mt-1 mb-8'>
              <Link to='/' > 
                <span className='text-blue-700 hover:text-blue-500 hover:underline'>{`<- Back to All Employee Page`}</span>
              </Link>
            </div>
            <form className='mt-5' onSubmit={submitHandler}>
            <label>
                <span className='font-semiboldbold'>Employee Name</span>
                <input type='text' placeholder='John Doe' name='name' className=' mt-3 mb-4 py-2 px-2 w-full bg-black border rounded-md border-gray-600' value={formData.name} onChange={formHandler} />
              </label>
              <label>
                <span className='font-bold'>Employee Email Id</span>
                <input type='email' placeholder='abc@abc.com' name='email' className=' mt-3 mb-4 py-2 px-2 w-full bg-black border rounded-md border-gray-600' value={formData.email} onChange={formHandler} />
              </label>
              <label>
                <span className='font-bold'>Employee Title</span>
                <input type='text' placeholder='Title' name='title' className=' mt-3 mb-4 py-2 px-2 w-full bg-black border rounded-md border-gray-600' value={formData.title} onChange={formHandler} />
              </label>
              <label>
                <span className='font-bold'>Employee Department</span>
                <input type='text' placeholder='Department' name='department' className=' mt-3 mb-4 py-2 px-2 w-full bg-black border rounded-md border-gray-600' value={formData.department} onChange={formHandler} />
              </label>
              <label>
                <span className='font-bold'>Employee Role</span>
                <input type='text' placeholder='Role' name='role' className=' mt-3 mb-4 py-2 px-2 w-full bg-black border rounded-md border-gray-600' value={formData.role} onChange={formHandler} />
              </label>
              <button className='w-full px-3 py-3 bg-indigo-600 rounded-lg'>Create Employee</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login