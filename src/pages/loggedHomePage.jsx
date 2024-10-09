import React from 'react';

const MentorDashboard = ({ mentorData }) => {
    return (
        <div className="container my-5">
            <h1 className="text-center">Welcome, {mentorData.name}!</h1>
            <div className="row my-4">
                <div className="col-md-4">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">Your Points</div>
                        <div className="card-body">
                            <h5 className="card-title">{mentorData.points} Points</h5>
                            <p className="card-text">Keep up the great work to earn more rewards!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-header">Your Rating</div>
                        <div className="card-body">
                            <h5 className="card-title">{mentorData.rating} <span className="text-warning">&#9733;</span></h5>
                            <p className="card-text">Your current rating reflects your mentoring effectiveness.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-header">Upcoming Sessions</div>
                        <div className="card-body">
                            <h5 className="card-title">{mentorData.upcomingSessions.length} Scheduled</h5>
                            <p className="card-text">Stay organized and prepare for your next mentoring session!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Feedback Section */}
            <section className="my-5">
                <h2 className="text-center">Recent Feedback from Mentees</h2>
                <div className="list-group">
                    {mentorData.recentFeedback.length === 0 ? (
                        <div className="list-group-item">No feedback yet!</div>
                    ) : (
                        mentorData.recentFeedback.map((feedback, index) => (
                            <div key={index} className="list-group-item">
                                <h5>{feedback.menteeName}</h5>
                                <p>{feedback.comment}</p>
                                <span className="text-muted">{feedback.date}</span>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* Rewards Section */}
            <section className="my-5">
                <h2 className="text-center">Your Rewards</h2>
                <div className="row">
                    {mentorData.rewards.length === 0 ? (
                        <div className="text-center">You have no rewards yet. Keep mentoring to earn rewards!</div>
                    ) : (
                        mentorData.rewards.map((reward, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <div className="card text-white bg-primary">
                                    <div className="card-header">{reward.title}</div>
                                    <div className="card-body">
                                        <p className="card-text">{reward.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default MentorDashboard;
