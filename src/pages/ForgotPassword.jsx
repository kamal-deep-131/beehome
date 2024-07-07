import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const resetPasswordHandler = async () => {
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            // console.log('Email sent to user');
            toast.success('Cheack email for reset password.')
        } catch (error) {
            // console.log('Password reset: ', error);
            toast.error("Please enter valid email")
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        resetPasswordHandler();
    };

    return (
        <section>
            <div className="p-4 flex flex-col items-center justify-center md:p-8 bg-blueBg min-h-screen">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 pt-20">Forgot Password</h2>
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered outline-none focus:outline-none focus:border-mainColor w-full"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="text-myBg font-semibold bg-mainColor rounded-full px-6 py-3">Forgot Password</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ForgotPassword;
