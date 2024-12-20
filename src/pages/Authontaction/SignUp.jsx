import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const from = location?.state || "/"
  const navigate = useNavigate();
  const { createUser, signInWithGoogle, updateUserProfile, loading, setLoading } = useAuth();

  const handleSignup = async e => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true)
      const res = await createUser(email, password)
      // 3. Update profile user name and photo in firebase
      await updateUserProfile(name);
      navigate(from)
      toast.success('Registration successful')
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate(from)
      toast.success('Signup successful')
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div className='flex justify-center items-center '>
      <div className='flex flex-col max-w-md p-6  rounded-md sm:p-10  text-gray-900'>
        <div className=' text-center'>
        <div
          disabled={loading}
          onClick={handleGoogle}
          className='disabled:cursor-not-allowed flex justify-center  items-center space-x-2 border rounded-xl p-2 border-gray-300 cursor-pointer'
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        </div>
        <form onSubmit={handleSignup} className='space-y-6'>
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md  border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900'
              />
            </div>
            <div className='relative'>
              <label htmlFor='password' className='text-sm mb-2'>
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900'
              />
              <span className="absolute top-10 right-2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div>
            <button
              disabled={loading}
              type='submit'
              className='bg-orange-500 w-full rounded-md py-3 text-white'
            >
              {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : "Register"}
            </button>
          </div>
        </form>
 
 
      
      
      </div>
    </div>
  )
}

export default SignUp
