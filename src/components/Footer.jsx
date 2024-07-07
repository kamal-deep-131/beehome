import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer className="footer m-3 md:m-10 p-6 md:p-10 bg-blueBg text-textColor rounded-xl mx-auto my-6 w-11/12">
                <aside className="items-center">
                    <Link className="text-textColor font-bold text-lg" to='/'>
                        <img src="/beehomeLogo.svg" alt="Beehome" />
                    </Link>
                    <nav className="flex items-center justify-start gap-3 mt-3">
                        <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </nav>
                </aside>

                <nav>
                    <h6 className="footer-title text-textColor opacity-100">Product</h6>
                    <a className="link link-hover">Sell</a>
                    <a className="link link-hover">Buy</a>
                    <a className="link link-hover">Advertise</a>
                    <a className="link link-hover">Our agent</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-textColor opacity-100">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-textColor opacity-100">Support</h6>
                    <a className="link link-hover">Getting started</a>
                    <a className="link link-hover">Help center</a>
                    <a className="link link-hover">Server Status</a>
                    <a className="link link-hover">Report a bug</a>
                    <a className="link link-hover">Chat Support</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-textColor opacity-100">Contact Us</h6>
                    <a className="link link-hover flex gap-1 items-center justify-center"><img src="/message.svg" alt="mail" />email2kamaldeep@gmail.com</a>
                    <a className="link link-hover flex gap-1 items-center justify-center"><img src="/call.svg" alt="call" />
                        +91 9817526073
                    </a>
                    <a className="link link-hover flex gap-1 items-center justify-center"><img src="/location.svg" alt="location" />
                        123 Maple Street, Suite 456, Springfield, IL 62704
                    </a>
                </nav>


            </footer>

        </>
    )
}

export default Footer