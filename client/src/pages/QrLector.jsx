import React from 'react'
import HeaderDashboard from '../components/HeaderDashboard'

const QrLector = () => {
  return (
    <>
    <HeaderDashboard></HeaderDashboard>
    <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center'>
      <h1 className="text-4xl font-bold my-8" >Lector de QR</h1>
      <button type='' className=" bg-blue-500 my-4 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
        Escanear
      </button>
    </div>
    </>
  )
}

export default QrLector
