import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const loading = false; // Assuming no loading state since functions are removed.
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
      toast.success('Signup successful');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className='flex justify-center items-center  '>
      <div className='flex flex-col max-w-md rounded-md text-gray-900'>
  
     
        <div
          disabled={loading}
          onClick={handleGoogle}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 cursor-pointer  rounded-xl'
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        <form className='space-y-6'>
          <div className=''>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>Email address</label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-xl border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900'
              />
            </div>
            <div className='relative'>
              <label htmlFor='password' className='text-sm mb-2'>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                autoComplete='current-password'
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
          <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-orange-500 text-gray-400'>Forgot password?</button>
        </div>

          <div>
            <button
              disabled={loading}
              type='submit'
              className='bg-orange-500 w-full rounded-md py-3 text-white'
            >
              {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : "Login"}
            </button>
          </div>
        </form>
        
    
      </div>
    </div>
  );
};

export default SignIn;
