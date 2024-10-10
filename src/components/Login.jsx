import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; 

const LoginForm = ({ onCancel }) => {
    const { setMentorId } = useAuth(); // Use context's setter for mentorId
    const [inputMentorId, setInputMentorId] = useState(''); // Local input state for the form

    const handleLogin = (e) => {
        e.preventDefault();
        setMentorId(inputMentorId); // Directly set mentorId in the context
        console.log("Logged in with Mentor ID:", inputMentorId);
        onCancel(); // Call onCancel after successful login
    };

    return (
        <div className="container p-5">
            <h2 className="text-center">Login to Your Account</h2>
            <form onSubmit={handleLogin} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="mentorId" className="form-label">Mentor ID</label>
                    <input 
                        type="text" 
                        id="mentorId" 
                        className="form-control" 
                        value={inputMentorId} // Handle form input locally
                        onChange={(e) => setInputMentorId(e.target.value)} // Update form input
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-secondary ms-3" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default LoginForm;

