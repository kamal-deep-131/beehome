import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PasswordField, TextField } from '../components';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import GoogleButton from './GoogleButton';
import toast from 'react-hot-toast'

const SignIn = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onsubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Signed In Sucessfully!!")
            // console.log('Signed in');
            navigate('/profile')

        } catch (error) {
            toast.error(`Something went wrong`)
        }
    };

    return (
        <section>
            <div className="p-4 flex flex-col items-center justify-center md:p-8 bg-blueBg min-h-screen">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 pt-20">Login now!</h2>
                <form onSubmit={onsubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="form-control mb-4">

                        <TextField
                            fieldName="Email"
                            fieldType="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered outline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <PasswordField
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered outline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <label className="label">
                        <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    <label className="label">
                        <span className="label-text-alt">Don't have an account? <Link to="/sign-up" className="link link-primary">Sign up</Link></span>
                    </label>
                    <div className="form-control mt-6">
                        <button className="text-myBg font-semibold bg-mainColor rounded-full px-6 py-3" type="submit">Sign In</button>
                    </div>
                    <div className="divider">OR</div>
                    <GoogleButton />
                </form>
            </div>
        </section>
    );
};

export default SignIn;
