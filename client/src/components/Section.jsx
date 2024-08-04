import React from 'react'

const Section = () => {
    return (
        <>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold mb-6'>Detalles del evento</h1>
            <div className='flex items-center justify-between'>
                <div className='flex-1 pr-8'>
                    <img
                        src="https://via.placeholder.com/400x300"
                        alt="Descripción de la imagen"
                        className='w-full h-auto object-cover rounded-lg shadow-md'
                    />
                </div>

                <div className='flex-1'>
                    <h1 className='text-4xl font-bold mb-4 '>Especialistas internacionales</h1>
                    <h2 className='text-2xl '>+10 de conferencias magistrales</h2>
                </div>
            </div>
            </div>
        </>
    )
}

export default Section