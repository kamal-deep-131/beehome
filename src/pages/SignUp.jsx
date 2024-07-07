import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { PasswordField, TextField } from '../components';
import GoogleButton from './GoogleButton';
import { toast } from 'react-hot-toast'

const SignUp = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userDetails = await createUserWithEmailAndPassword(auth, email, password);
            const user = userDetails.user;
            toast.success(`Welcome ${username}, You signedin Sucessfully!`)
            navigate('/')
        } catch (error) {
            toast.error('Something went Wrong')
        }
    };



    return (
        <section>
            <div className="p-4 flex flex-col items-center justify-center md:p-8 bg-blueBg min-h-screen">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 pt-20">Sign Up</h2>
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="form-control mb-4">

                        <TextField
                            fieldName="Username"
                            fieldType="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input input-bordered outline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
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
                        <span className="label-text-alt">Already have an account? <Link to="/sign-in" className="link link-primary">Sign in</Link></span>
                    </label>
                    <div className="form-control mt-6">
                        <button className="text-myBg font-semibold bg-mainColor rounded-full px-6 py-3" type="submit">Sign Up</button>
                    </div>
                    <div className="divider">OR</div>
                    <GoogleButton />
                </form>
            </div>
        </section>
    );
};

export default SignUp;
