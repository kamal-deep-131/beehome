import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { myContext } from '../context/Context';
import { HashLink } from 'react-router-hash-link';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { userImageURL, currentUser, setUserImageURL } = myContext();
    const [menuOpen, setMenuOpen] = useState(false);

    // signout functionality
    const handleLogOut = async () => {
        try {
            console.log('signing out');
            const auth = getAuth();
            const signout = await signOut(auth);
            toast.success('Successfully logged Out!')
            setUserImageURL('/defaultAvtar.jpg');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className="flex items-center justify-between py-4 px-10 bg-base-100 shadow-md  z-40 fixed w-full min-w-20  gap-5">
            {/* logo */}
            <div className="z-10 ">
                <Link className="text-textColor  font-bold text-lg" to="/">
                    <img src="/beehomeLogo.svg" className='w-full' alt="Beehome" />
                </Link>
            </div>

            {/* <Toaster position='top-right' /> */}

            {/* navigation bar */}
            <div className="">
                <nav
                    className={`flex-col md:flex-row md:flex items-center md:justify-center md:gap-4 font-semibold w-[100%] absolute md:static top-0 left-0  md:p-2  bg-blueBg md:bg-transparent ${menuOpen ? 'flex' : 'hidden md:flex'
                        } z-[5] rounded-b-xl shadow-md md:shadow-none`}
                >
                    <ul className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-4 p-20 md:p-0  h-full">
                        <li className="hover:text-mainColor transition delay-150 duration-300 ease-in-out">
                            <Link className='text-xs text-center md:text-base' to="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-mainColor transition delay-150 duration-300 ease-in-out">
                            <Link className='text-xs text-center md:text-base' to="/all-properties" onClick={() => setMenuOpen(false)}>
                                All Properties
                            </Link>
                        </li>
                        <li className="hover:text-mainColor transition delay-150 duration-300 ease-in-out">
                            <HashLink className='text-xs text-center md:text-base' smooth to="/#process" onClick={() => setMenuOpen(false)}>
                                Our Process
                            </HashLink>
                        </li>
                        <li className="hover:text-mainColor transition delay-150 duration-300 ease-in-out">
                            <HashLink className='text-xs text-center md:text-base' smooth to="/#reviews" onClick={() => setMenuOpen(false)}>
                                Reviews
                            </HashLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center justify-center gap-2">
                {/* hamburger icon for mobile */}
                <div className="md:hidden flex items-center ">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-textColor focus:outline-none z-10 w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* login button */}
                <div className="dropdown dropdown-end z-10 w-full">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar outline-blueBg">
                        <div className="w-8 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userImageURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                    >
                        <li>
                            <Link to={currentUser ? '/profile' : '/sign-in'} className="hover:bg-blueBg">
                                {currentUser ? 'Profile' : 'Sign In'}
                            </Link>
                        </li>
                        {currentUser ? (
                            <>
                                <li className="hover:bg-blueBg">
                                    <Link to="/forgot-password">Forgot Password</Link>
                                </li>
                                <li className="hover:bg-blueBg">
                                    <a onClick={handleLogOut}>Logout</a>
                                </li>
                            </>
                        ) : null}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
