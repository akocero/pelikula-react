import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
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
        <div className="dashboard">
            <section className="welcome container">
                <h3>Wlcome {currentUser && currentUser.email}</h3>
                <br />
                <h4>Announcement!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis suscipit velit iste numquam eaque cupiditate nam cum. Eveniet, voluptatum?</p>
                <button onClick={logoutHandler}>Log out</button>
                {error && <div>{error}</div>}
            </section>
            {/* <div>Dashboard</div>
            
            <h3></h3>
             */}

            <section className="forum-categories">
                <ul className="category">
                    <li className="category__item">
                        <a href="/" className="category__link category__link--active">Trending</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className="category__link">Upcomming</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className="category__link">Best Movies</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className="category__link">Local Movies</a>
                    </li>
                </ul>
            </section>
            <section className="forum-header container">
                <h2>Trending</h2>
                <p className="pl-2">(Trending Movies)</p>
                <button className="btn">New Room</button>
            </section>

            <div className="room container">
                <h4 className="room__name">Room 1</h4>
                <p className="room__participants">Participants - 15</p>
            </div>
            <div className="room container">
                <h4 className="room__name">Room 2</h4>
                <p className="room__participants">Participants - 15</p>
            </div>
            <div className="room container">
                <h4 className="room__name">Room 3</h4>
                <p className="room__participants">Participants - 15</p>
            </div>

        </div>
    )
}

export default Dashboard;