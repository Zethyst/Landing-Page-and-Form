import React, { useState } from "react";
import logo from "./Vector.png";
import { Link, useNavigate} from 'react-router-dom'
import ErrorMessage from './ErrorMessage'

function Register() {
    const [isSubmitting, setIsSubmitting ] =useState(false)
    const [success,setSuccess]=useState(false)
    const [error, setError] = useState(false);
    const [timer, setTimer]=useState(5)
    const navigate=useNavigate();
    const [credentials, setCredentials ] =useState({
        name:'',
        email:''
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSubmitting(true)
        if (!credentials.email.includes('@')) {
            setError(true);
            setIsSubmitting(false)
            return;
        }
        setTimeout(() => {
            setError(false);
            setIsSubmitting(false)
            setSuccess(true)
            setInterval(() => {
                setTimer((prev)=>prev-1)
            }, 1000);
            setTimeout(() => {
                navigate("/")
            }, 5000);
        }, 2000);
    }
    const handleChange = ({target})=>{
        setCredentials({...credentials, [target.name]:target.value})
    }

  return (
    <>
    {success?(
        <div className="flex flex-col justify-center items-center relative my-9">
        <img className="cursor-pointer h-10 object-fill left-8 absolute top-0" src={logo} alt="Company Logo" />
      <div className="h-96 w-72 mx-auto flex flex-col space-y-7 justify-center items-center my-32">
        <i style={{scale:"3.5"}} class="text-[#2DA950] fa-solid fa-circle-check"></i>
        <p className="text-center text-[#2DA950] text-4xl covered-by-your-grace-regular translate-y-5">Success Submitted</p>
        <p className='text-center manrope text-6xl w-[33rem] leading-[4rem]'>Congratulations</p>
        <p className='text-center text-[#727272] manrope text-2xl w-[40rem]'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
        <p className="absolute bottom-0 text-center text-[#727272] manrope text-xl w-[40rem]">Redirecting you to Homepage in <span className="text-black font-bold">{timer} Seconds</span></p>
      </div>
    </div>
):
    (<div className="flex flex-col justify-center items-center relative my-7">
      <div className="absolute top-0 flex justify-between items-center space-x-[1000px]">
        <img className="cursor-pointer h-10 object-fill -translate-x-12" src={logo} alt="Company Logo" />
        <Link to='/'><div style={{border:"2px solid #E4E3E3"}} className="translate-x-12 p-8 cursor-pointer rounded-full  h-1 w-1 flex justify-center items-center"><p className="scale-150">X</p></div></Link>
      </div>
      <div className="h-96 w-72 mx-auto flex flex-col justify-center items-center my-36">
        <p className="text-center text-[#2DA950] text-4xl covered-by-your-grace-regular">Registration Form</p>
        <p className='text-center manrope text-6xl w-[33rem] leading-[4rem]'>Start your success</p>
        <p className='text-center manrope text-6xl w-[33rem]'>Journey here!</p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 mt-12" noValidate>
    <input type="text" value={credentials.name} name="name" onChange={handleChange} placeholder="Enter your name" className="bg-[#EFEFEF] focus:bg-[#F5F8FF] border-none focus:outline-[#537FF1] rounded-full p-5 px-8 w-96"/>
        <input type="email" value={credentials.email} name="email" onChange={handleChange} placeholder="Enter your email" className="bg-[#EFEFEF] focus:bg-[#F5F8FF] border-none focus:outline-[#537FF1] rounded-full p-5 px-8 w-96 -translate-y-1"/>
        { (error) && (
                            <ErrorMessage msg='Enter a valid email address' />)}
        <button disabled={isSubmitting} className={`translate-y-3 text-white h-14 bg-black rounded-full p-5 shadow w-96 pb-11 ${isSubmitting?"bg-[#C9C9C9]":""}`} >{isSubmitting?'Submitting...':'Submit'}</button>
        </form>
      </div>
    </div>)}
    </>
  );
}

export default Register;
