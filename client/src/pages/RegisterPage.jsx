import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
//import { registerRequest } from '../api/auth'

const RegisterPage = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        const res = await registerRequest(values)
        console.log(res)
        navigate('/exito', { state: values })
    })

    return (
        <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center mx-2'>
            <h1 className="text-4xl font-bold my-8">Registra tus datos</h1>
            <div className=' bg-slate-100 max-w-md p-10 rounded-md border shadow-lg'>
                <form onSubmit={onSubmit}>
                    <label>Nombre(s)</label>
                    <input type='text' {...register("username", { required: true })}
                        className='w-full bg-zinc-200 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Nombre(s)'
                    />
                    <label>Apellidos</label>
                    <input type='text' {...register("lastname", { required: true })}
                        className='w-full bg-zinc-200 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Apellidos'
                    />
                    <label>Correo</label>
                    <input type='email' {...register("email", { required: true })}
                        className='w-full bg-zinc-200 text-white px-4 py-2 rounded-md my-2'
                        placeholder='correo@correo.com'
                    />
                    <button type='submit' className="w-full bg-red-500 my-4 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage