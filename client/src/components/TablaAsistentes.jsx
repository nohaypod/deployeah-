import React, { useState } from 'react';

const TablaAsistentes = () => {
    const [search, setSearch] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUserCountModalOpen, setIsUserCountModalOpen] = useState(false);

    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', attendance: [true, false] },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', attendance: [false, false] },
        // Añade más usuarios según sea necesario
    ];

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };

    const handleOpenUserCountModal = () => {
        setIsUserCountModalOpen(true);
    };

    const handleCloseUserCountModal = () => {
        setIsUserCountModalOpen(false);
    };

    const handlePrint = () => {
        console.log('Imprimir');
    };

    const handleEdit = () => {
        console.log('Editar');
    };

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            console.log('Eliminar');
        }
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // Calcula el número de usuarios con asistencia marcada
    const totalUsers = filteredUsers.length;
    const usersWithAttendance = filteredUsers.filter(user => user.attendance.some(att => att)).length;

    return (
        <>
            <h1 className="text-4xl font-bold text-center my-4">Recepción</h1>
            <div className="max-w-6xl mx-auto p-2">
                <div className="flex justify-between mb-4">
                    <div className="flex space-x-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => console.log('Nuevo asistente')}>
                            Nuevo asistente
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleOpenUserCountModal}>
                            Contador de Usuarios
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={search}
                        onChange={handleSearchChange}
                        className="border border-gray-400 p-2 rounded"
                    />
                </div>

                <table className="min-w-full bg-red-200 border-collapse">
                    <thead className='bg-red-300'>
                        <tr>
                            <th className="py-2 border border-gray-400">Nombre</th>
                            <th className="py-2 border border-gray-400">Correo</th>
                            <th className="py-2 border border-gray-400">Asistencia</th>
                            <th className="py-2 border border-gray-400">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td className="py-2 px-4 border border-gray-400 text-center">{user.name}</td>
                                <td className="py-2 px-4 border border-gray-400 text-center">{user.email}</td>
                                <td className="py-2 px-4 border border-gray-400 text-center">
                                    <input type="checkbox" checked={user.attendance[0]} className="mr-2" readOnly />
                                    <input type="checkbox" checked={user.attendance[1]} readOnly />
                                </td>
                                <td className="py-2 px-4 border border-gray-400 text-center">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                        onClick={() => handleOpenModal(user)}
                                    >
                                        Ver
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-4 rounded w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Detalles del Usuario</h2>
                        <p><strong>Nombre:</strong> {selectedUser.name}</p>
                        <p><strong>Correo:</strong> {selectedUser.email}</p>
                        <p><strong>Asistencia:</strong></p>
                        <ul>
                            <li>Asistencia día 1: {selectedUser.attendance[0] ? 'Presente' : ''}</li>
                            <li>Asistencia día 2: {selectedUser.attendance[1] ? 'Presente' : ''}</li>
                        </ul>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={handleEdit}>
                                Editar
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handlePrint}>
                                Imprimir
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDelete}>
                                Eliminar
                            </button>
                            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleCloseModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isUserCountModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-4 rounded w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Contador de Usuarios</h2>
                        <p className="text-center">Total de usuarios: {totalUsers}</p>
                        <p className="text-center">Usuarios con asistencia marcada: {usersWithAttendance}</p>
                        <div className="flex justify-center mt-4">
                            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleCloseUserCountModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default TablaAsistentes;
