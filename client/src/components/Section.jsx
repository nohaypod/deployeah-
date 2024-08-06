import React from 'react'

const Section = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center mb-10'>
                <h1 className='text-4xl font-bold mb-6'>Conferencias</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex-1 pr-8'>
                        <img
                            src="https://via.placeholder.com/400x300"
                            alt="Descripción de la imagen"
                            className='w-full h-80 object-cover rounded-lg shadow-md'
                        />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-4xl font-bold mb-4'>Especialistas nacionales e internacionales</h1>
                        <h2 className='text-2xl'>+ de 10 acreditaciones reutilizables</h2>
                        <h2 className='text-2xl'>+ de 30 especialistas disruptivos</h2>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold mb-6'>Clases magistrales</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex-1 pr-8'>
                        <h1 className='text-4xl font-bold mb-4'>Especialistas internacionales</h1>
                        <h2 className='text-2xl'>3 conferencias magistrales</h2>
                    </div>
                    <div className='flex-1'>
                        <img
                            src="https://via.placeholder.com/400x300"
                            alt="Descripción de la imagen"
                            className='w-full h-80 object-cover rounded-lg shadow-md'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section