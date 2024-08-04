import React from 'react'
import { Link } from 'react-router-dom'
import FooterLanding from '../components/FooterLanding'
import Section from '../components/Section'

const Home = () => {
  return (
    <>
      <div className='bg-gradient-home px-20 p-10'>
        <h1 className='text-5xl text-center py-4 font-bold'>Asociacion de Eventos Presenciales</h1>
        <div className='flex items-center justify-between  p-8 h-[calc(100vh-100px)]'>
          <div className='flex-1 pr-8'>
            <h1 className='text-5xl font-bold  mb-4'>Evento 2024</h1>
            <p className='text-2xl mb-6'>Descripción o contenido adicional que proporciona más información sobre el evento.</p>
            <Link to='/register'>
              <button type='button' className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                Registrarme
              </button>
            </Link>
          </div>

          <div className='flex-1'>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Descripción de la imagen"
              className=' h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

        </div>

      <Section />
      <FooterLanding />
      </div>
    </>
  )
}

export default Home