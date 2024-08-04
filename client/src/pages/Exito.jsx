import React from 'react'
import { useLocation } from 'react-router-dom'
import FooterLanding from '../components/FooterLanding'

const Exito = () => {
    const location = useLocation()
    const { username, email } = location.state || {}

    return (
        <>
        <div className='bg-gradient-home'>
            <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center text-center'>
                <h1 className="text-4xl font-bold my-8">Registrado exitosamente</h1>
                <h2 className="text-2xl my-8">Todo en orden <strong>{username}</strong>, hemos enviado un correo a <strong>{email}</strong>. Te esperamos el día del evento</h2>
            </div>
            <FooterLanding />
            </div>
            </>
    )
}

export default Exito
