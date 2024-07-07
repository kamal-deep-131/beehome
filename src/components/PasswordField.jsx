import React, { useState } from 'react';

const PasswordField = ({ onChange, value }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>

            <input
                type={showPassword ? 'text' : 'password'}
                className="grow input input-bordered"
                value={value}
                onChange={onChange}
                placeholder="password"
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="focus:outline-none"
            >
                {showPassword ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                    >
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                    >
                    </svg>
                )}
            </button>
        </div>
    );
};

export default PasswordField;
