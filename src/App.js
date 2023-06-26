import React, {useState, useEffect} from 'react'
import Todo from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Account from './pages/Account'
import { AuthContextProvider } from './pages/context/AuthContext'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#00E0E1]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`
}

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'> 
      firebase Regristro Autenticacion CRUD
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />

        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
