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
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>Sign in to access your account</p>
        </div>
        <form className='space-y-6 ng-untouched ng-pristine ng-valid'>
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>Email address</label>
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
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-orange-500 text-gray-400'>Forgot password?</button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>Login with social accounts</p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          disabled={loading}
          onClick={handleGoogle}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 cursor-pointer'
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link to='/signup' className='hover:underline hover:text-orange-500 text-gray-600'>Registration</Link>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
