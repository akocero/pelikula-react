import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
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
        <div className="auth">
            <div className="card">
                <h1 className="my-3">Sign In</h1>

                {error && <div className="alert alert-danger">{error}</div>}

                <form action="" onSubmit={submitHandler}>

                    <div className="input-group">
                        <label htmlFor="email" className="form-text">Email</label>
                        <input type="email" ref={emailRef} placeholder="Email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="form-text">Password</label>
                        <input type="password" ref={passwordRef} placeholder="Password" required />
                    </div>

                    <div className="input-group text-center">
                        <input className="btn btn-blue f-right" type="submit" disabled={loading} value="Sign in" />
                    </div>

                </form>

                <div className="text-center mt-3">
                    Need an account ? &nbsp;
                <Link to="/signup">Sign up</Link>
                </div>
            </div>


        </div>
    )
}

export default Login;