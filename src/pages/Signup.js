import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory, Link } from 'react-router-dom';
const Signup = () => {

    const { signup } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password not match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);

        } catch {
            setError('Failed to create account');
        }
        setLoading(false);
        history.push('/dashboard');
    }

    return (
        <div className="auth">
            <div className="card">
                <h1 className="mb-3">Sign Up</h1>
                {error && <div className="alert alert-danger error">{error}</div>}

                <form action="" onSubmit={submitHandler}>
                    <div className="input-group">
                        <label htmlFor="email" className="form-text">Email</label>
                        <input type="email" placeholder="Email" ref={emailRef} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="form-text">Password</label>
                        <input type="password" placeholder="Password" ref={passwordRef} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="form-text">Confirm Password</label>
                        <input type="password" placeholder="Comfirm Password" ref={passwordConfirmRef} required />
                    </div>

                    <div className="input-group">
                        <input className="btn btn-blue" type="submit" disabled={loading} value="Sign up" />
                    </div>

                </form>
                <div className="d-flex justify-content-center my-2">
                    Already have account ? &nbsp;<Link to="/login">Log in</Link>
                </div>
            </div>

        </div>
    )
}

export default Signup;