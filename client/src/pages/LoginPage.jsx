import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (values) => {
        try {
            // const response = await axios.post('http://localhost:4000/login', values);
            // const { token } = response.data;
            if (values.password == '123456789') {
                const { token } = 'ok';
                // Guardar el token en las cookies (o en localStorage si prefieres)
                document.cookie = `token=${token}; path=/`; // o localStorage.setItem('token', token);

            }
            // Redirigir al usuario al Dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error('Error de inicio de sesión:', error.response?.data?.message || error.message);
        }
    });

    return (
        <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center mx-2'>
            <h1 className="text-4xl font-bold my-8">Iniciar Sesión</h1>
            <div className='bg-slate-100 max-w-md p-10 rounded-md border shadow-lg'>
                <form onSubmit={onSubmit}>
                    <label>Correo</label>
                    <input
                        type='email'
                        {...register('email', { required: true })}
                        className='w-full bg-zinc-200 text-white px-4 py-2 rounded-md my-2'
                        placeholder='correo@correo.com'
                    />
                    <label>Contraseña</label>
                    <input
                        type='password'
                        {...register('password', { required: true })}
                        className='w-full bg-zinc-200 text-white px-4 py-2 rounded-md my-2'
                        placeholder='********'
                    />
                    <button
                        type='submit'
                        className="w-full bg-red-500 my-4 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage