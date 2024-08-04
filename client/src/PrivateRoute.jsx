import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = Boolean(document.cookie.includes('token'));
    return isAuthenticated ? Element : <Navigate to="/" />;
};

export default PrivateRoute;
