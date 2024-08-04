import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center mx-2'>
        <h1 className="text-4xl font-bold my-8">Evento 2024</h1>
        <div className="bg-slate-100 max-w-md p-10 rounded-md border shadow-md flex justify-center">
          <img src="https://via.placeholder.com/200" alt="Placeholder Image" className="w-48 h-auto rounded-md" />
        </div>
        <Link to='/register'><button type='' className=" bg-red-500 my-4 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
          Registrarme
        </button></Link>
      </div>
    </>
  )
}

export default Home
