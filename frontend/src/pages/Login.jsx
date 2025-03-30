import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Both fields are required.');
            return;
        }

        if (email === 'user@example.com' && password === 'password123') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = '/';
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col">

            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-gray-100 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center text-sm mt-4">
                        Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
