"use client";
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        telephone: '',
        address: '',
        ssn: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData, 'formData');
        axios.post('http://127.0.0.1:8000/api/users', formData)
            .then(response => alert('User info submitted successfully'))
            .catch(error => console.error(error));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-gray p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-gray-300">
                <h1 className="text-2xl font-bold text-center mb-12 text-gray-800">User Info Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <input 
                            type="text" 
                            name="first_name" 
                            placeholder="First Name" 
                            value={formData.first_name} 
                            onChange={handleChange} 
                            required 
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="text" 
                            name="last_name" 
                            placeholder="Last Name" 
                            value={formData.last_name} 
                            onChange={handleChange} 
                            required 
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="text" 
                            name="telephone" 
                            placeholder="Telephone" 
                            value={formData.telephone} 
                            onChange={handleChange} 
                            required 
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Full Address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            required 
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="text" 
                            name="ssn" 
                            placeholder="SSN" 
                            value={formData.ssn} 
                            onChange={handleChange} 
                            required 
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 border-2 border-blue-500 hover:border-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;
