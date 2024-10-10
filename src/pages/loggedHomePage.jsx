
import React from 'react';
import { useAuth } from '../AuthContext'; // Access the context for mentorId
 


const MentorDashboard = ({ mentorData }) => {
    const { mentorId } = useAuth();
    return (

        <div className="container mt-5">
        <div className="row">
            {/* Welcome Banner */}
            <div className="col-12 mb-4">
                <div className="jumbotron bg-light p-4">
                    <h1 className="display-4">Welcome Back, Mentor!</h1>
                    <p className="lead">Mentor ID: {mentorId}</p>
                    <hr className="my-4" />
                    <p>Continue progressing in the Code Heads Loyalty Program. Here’s what you’ve achieved and what’s coming next.</p>
                </div>
            </div>

            {/* Points and Rewards Overview */}
            <div className="col-lg-6">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5>Your Points</h5>
                        <p>You currently have <strong>1200 Points</strong></p>
                        <hr />
                        <h5>Next Reward</h5>
                        <p>Free Code Heads T-shirt (Earn 2000 Points to redeem)</p>
                    </div>
                </div>
            </div>

            {/* Program Status and Events */}
            <div className="col-lg-6">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5>Your Program Tier</h5>
                        <p>You are currently a <strong>Gold Member</strong></p>
                        <hr />
                        <h5>Upcoming Event</h5>
                        <p>“Mentorship Masterclass” – October 20, 2024</p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="col-lg-12">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5>Quick Actions</h5>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <button className="btn btn-outline-success w-100 mb-2">View Rewards</button>
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-outline-info w-100 mb-2">Upcoming Events</button>
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-outline-warning w-100 mb-2">Redeem Points</button>
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-outline-danger w-100 mb-2">Contact Support</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional News or Updates */}
            <div className="col-lg-12">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5>Latest News</h5>
                        <hr />
                        <p>Exciting new features are coming to the Code Heads Hub loyalty program. Stay tuned!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
};

export default MentorDashboard;
