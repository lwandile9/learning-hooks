import React, { useState } from 'react';

const LoginForm = ({ onCancel }) => {
    const [mentorId, setMentorId] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        console.log("Logged in with Mentor ID:", mentorId);
        onCancel(); 
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
                        value={mentorId} 
                        onChange={(e) => setMentorId(e.target.value)} 
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
