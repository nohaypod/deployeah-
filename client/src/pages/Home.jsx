import React from 'react'
import { Link } from 'react-router-dom'
import FooterLanding from '../components/FooterLanding'
import Section from '../components/Section'
import hero from '../img/hero.jpeg'
import HeaderHome from '../components/HeaderHome'

const Home = () => {
  return (
    <>
    <HeaderHome></HeaderHome>
      <div className='max-q mx-auto bg-gradient-home px-32'>   
        {/* <h1 className='text-4xl text-center py-2 font-bold'>Asociacion de Eventos Presenciales de Corazón</h1> */}
        <div className='flex items-center justify-evenly py-10'>
          <div className='flex-1 pr-8'>
            <h1 className='text-6xl font-bold'>Congreso AEPC 2024</h1>
            <p className='text-2xl mb-6'>Expertos en eventología nacionales e internacionales.</p>
            <Link to='/register'>
              <button type='button' className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6  transition-colors duration-300">
                Registrarme
              </button>
            </Link>
          </div>
          <div className='flex'>
            <img
              src={hero}
              alt="corazón"
              className='w-96 rounded-lg shadow-lg' 
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