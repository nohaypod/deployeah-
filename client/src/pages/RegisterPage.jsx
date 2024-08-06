import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerRequest } from '../api/auth';

import FooterLanding from '../components/FooterLanding';

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (values) => {
        try {
            const res = await registerRequest(values);
            console.log(res);
            navigate('/exito', { state: values });
        } catch (error) {
            console.error("Error registrando:", error);
        }
    });

    return (
        <>
            <div className='bg-gradient-home'>
                <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center'>
                    <h1 className="text-4xl font-bold my-8">Registra tus datos</h1>
                    <div className='bg-slate-100 max-w-md p-10 rounded-md border shadow-lg'>
                        <form onSubmit={onSubmit}>
                            <label>Nombre(s)</label>
                            <input type='text' {...register("nombre", { required: true })}
                                className='w-full bg-zinc-200  px-4 py-2 rounded-md my-2'
                                placeholder='Nombre(s)'
                            />
                            <label>Apellidos</label>
                            <input type='text' {...register("apellidos", { required: true })}
                                className='w-full bg-zinc-200  px-4 py-2 rounded-md my-2'
                                placeholder='Apellidos'
                            />
                            <label>Correo</label>
                            <input type='email' {...register("email", { required: true })}
                                className='w-full bg-zinc-200  px-4 py-2 rounded-md my-2'
                                placeholder='correo@correo.com'
                            />
                            <button type='submit' className="w-full bg-red-500 my-4 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
                <FooterLanding></FooterLanding>
            </div>
        </>
    );
}

export default RegisterPage;
