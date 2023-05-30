import { useState } from 'react'
import axios from 'axios'

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  function handleChange(e) {
    setNewUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const createUser = () => {
    axios
      .post('/api/signup', {
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        email: newUser.email,
        password: newUser.password,
      })
      .then(function (res) {
        console.log('data sent')
        console.log(res.data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign up for your free account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6'>
            <div>
              <label
                htmlFor='first_name'
                className='block text-sm font-medium leading-6 text-gray-900'>
                First Name
              </label>
              <div className='mt-2'>
                <input
                  onChange={handleChange}
                  value={newUser.firstName}
                  id='firstName'
                  name='firstName'
                  type='text'
                  required
                  className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Last Name
              </label>
              <div className='mt-2'>
                <input
                  onChange={handleChange}
                  value={newUser.lastName}
                  id='lastName'
                  name='lastName'
                  type='text'
                  required
                  className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  onChange={handleChange}
                  value={newUser.email}
                  id='email'
                  name='email'
                  type='email'
                  required
                  className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  onChange={handleChange}
                  value={newUser.password}
                  id='password'
                  name='password'
                  type='password'
                  required
                  className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                onClick={createUser}
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
