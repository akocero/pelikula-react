import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useHistory, Link } from 'react-router-dom';
const Login = () => {

    const { login } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            return [
                setError('Failed to Log in'),
                setLoading(false)
            ]
        }
        setLoading(false);
        history.push('/dashboard');
    }

    return (
        <div className="container">
            <div>
                <div className="card shadow-sm w-400">
                    <h1 className="mb-2 text text-md">Log In</h1>

                    {error && <div className="alert alert-danger error">{error}</div>}

                    <form action="" onSubmit={submitHandler}>

                        <label htmlFor="email" >Email</label>
                        <input type="email" ref={emailRef} placeholder="Email" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" ref={passwordRef} placeholder="Password" required />

                        <input className="btn btn-blue mt-1" type="submit" disabled={loading} value="Sign in" />

                    </form>
                </div>

                <div className="d-flex justify-content-center my-2">
                    Need an account ? &nbsp;
                    <Link to="/signup">Sign up</Link>
                </div>

            </div>
        </div>
    )
}

export default Login;