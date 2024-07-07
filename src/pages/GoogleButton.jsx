import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const GoogleButton = () => {
    const navigate = useNavigate();

    // Google authentication
    const handleGoogleSignUp = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const userDetails = await signInWithPopup(auth, provider);
            const user = userDetails.user;
            toast.success('Successfully Logged In!');
            navigate('/profile'); // Navigate to profile page after successful login
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="form-control mt-6">
            <button className="btn btn-outline flex items-center justify-center" onClick={handleGoogleSignUp}>
                <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
                Sign up with Google
            </button>
        </div>
    );
};

export default GoogleButton;
