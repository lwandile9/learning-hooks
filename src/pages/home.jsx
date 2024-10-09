import React, { useState } from 'react';
import phobeBG from '../videos/phobeBG.mp4';
import LoginForm from '../components/Login';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleCancel = () => {
        setIsLoggedIn(false);
    };

    const leaderboardData = [
        { name: 'Gcina N.', points: 950, rating: 4.9 },
        { name: 'Milani N.', points: 850, rating: 4.8 },
        { name: 'Anathi N.', points: 820, rating: 4.7 }
    ];
    console.log(isLoggedIn);

    return (
        <div className="container-fluid p-0">
            {/* Video background */}
            <div className="video-background position-relative">
                <video className="w-100 h-100" autoPlay muted loop>
                    <source src={phobeBG} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-50 p-5 rounded-3">
                    <h1 className="fw-bolder text-uppercase">Welcome to Code Heads Loyalty Program</h1>
                    <p className="lead">Rewarding mentors for their dedication and impact.</p>
                    <button onClick={handleLogin} className="btn btn-primary btn-lg mt-4">Log In</button>
                </div>
            </div>

            {/* Conditionally render the Home content or Login Form */}
            {isLoggedIn ? (
                <LoginForm onCancel={handleCancel} />
            ) : (
                <>
                    {/* Loyalty Program Intro */}
                    <section className="p-5 text-center bg-light">
                        <div className="container">
                            <h2 className="fw-bold">About the Loyalty Program</h2>
                            <p className="lead mt-3">
                                The Code Heads Hub Loyalty Program is designed to motivate mentors like you to keep up the hard work and stay engaged. As you mentor, support, and help students achieve their goals, you’ll earn loyalty points that can be redeemed for exclusive rewards!
                            </p>
                        </div>
                    </section>

                    {/* Steps to Get Started */}
                    <section id="get-started" className="p-5 bg-dark text-white text-center">
                        <div className="container">
                            <h2>How It Works</h2>
                            <p className="mt-4">
                                As a mentor, simply log in with your Mentor ID to access your profile, track your points, and see how close you are to earning rewards. Your hard work will be recognized through badges, points, and exclusive perks!
                            </p>
                            <a href="/login" className="btn btn-light btn-lg mt-3">Log In</a>
                        </div>
                    </section>

                    {/* Features of the Loyalty Program */}
                    <section className="p-5 bg-secondary text-white">
                        <div className="container">
                            <h2 className="text-center">Program Highlights</h2>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <div className="card bg-primary text-white mb-3">
                                        <div className="card-header">Earn Points</div>
                                        <div className="card-body">
                                            <p className="card-text">Each time you mentor or complete a goal with your student, you earn points toward rewards.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bg-success text-white mb-3">
                                        <div className="card-header">Track Your Progress</div>
                                        <div className="card-body">
                                            <p className="card-text">Monitor your impact through points and badges on your profile. Get real-time feedback on your contribution to the community.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bg-warning text-white mb-3">
                                        <div className="card-header">Exclusive Rewards</div>
                                        <div className="card-body">
                                            <p className="card-text">As you earn points, you unlock rewards like certificates, premium content, and recognition within the Code Heads community.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Leaderboard Section */}
                    <section className="p-5 bg-light text-center">
                        <div className="container">
                            <h2 className="fw-bold">Top Mentors Leaderboard</h2>
                            <p>Celebrate the top-performing mentors who have made a significant impact on the community!</p>
                            <div className="row mt-4">
                                {leaderboardData.map((mentor, index) => (
                                    <div key={index} className="col-md-4">
                                        <div className="card bg-dark text-white mb-3">
                                            <div className="card-header">
                                                <h4 className="fw-bold">{mentor.name}</h4>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">Points: {mentor.points}</p>
                                                <p className="card-text">Rating: {mentor.rating} <span className="text-warning">&#9733;</span></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Ways to Earn Points */}
                    <section className="p-5 bg-dark text-white">
                        <div className="container">
                            <h2 className="text-center">Ways to Earn More Points</h2>
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <div className="card bg-primary text-white mb-3">
                                        <div className="card-header">High Ratings</div>
                                        <div className="card-body">
                                            <p className="card-text">Keep your rating above 4.5 to maximize your points.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card bg-primary text-white mb-3">
                                        <div className="card-header">Complete Mentorship</div>
                                        <div className="card-body">
                                            <p className="card-text">Earn points for each successfully completed mentorship session.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card bg-primary text-white mb-3">
                                        <div className="card-header">Student Success</div>
                                        <div className="card-body">
                                            <p className="card-text">When your mentees achieve their learning goals, you both earn bonus points.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card bg-primary text-white mb-3">
                                        <div className="card-header">Mentoring Milestones</div>
                                        <div className="card-body">
                                            <p className="card-text">Receive bonus points for long-term mentoring relationships and consistency.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default Home;
