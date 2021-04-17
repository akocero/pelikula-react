import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom';
const Dashboard = () => {

    const { currentUser, logout } = useAuth();
    const [error, setError] = useState();
    const history = useHistory();
    const logoutHandler = async (e) => {
        e.preventDefault();

        try {
            setError('');
            await logout();
            history.push('/login');
        } catch {
            setError('Failed to log out');
        }

    }

    return (
        <div>
            <div>Dashboard</div>
            {error && <div>{error}</div>}
            <h3>{currentUser && currentUser.email}</h3>
            <button onClick={logoutHandler}>Log out</button>
        </div>
    )
}

export default Dashboard;