import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition">
                    Job Portal
                </Link>

                {/* Menu items */}
                <div className="space-x-6">
                    <Link to="/" className="hover:text-gray-200">Home</Link>
                    <Link to="/jobs" className="hover:text-gray-200">Jobs</Link>
                    <Link to="/companies" className="hover:text-gray-200">Companies</Link>
                    <Link to="/about" className="hover:text-gray-200">About</Link>
                </div>

                {/* Auth Buttons */}
                <div className="space-x-4">
                    <Link 
                        to='/login'
                        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Login
                    </Link>
                    <Link
                        to=""
                        className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Register
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
