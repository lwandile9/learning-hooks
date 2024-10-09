import React from 'react';
import phobeBG from '../videos/phobeBG.mp4'
const Home = ()=>{


    return (
    
      <div className='container fs-5  '>


<div className="video-background position-relative">
      <video className="w-100 h-100" autoPlay muted loop>
        <source src={phobeBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content position-absolute top-50 start-50 translate-middle text-white text-center bg-secondary">
        <h1 className='fw-bolder bg-secondary p-3 '>Welcome to Code Heads hub Loyalty program</h1>
        <p className='fw-bold'>Your journey begins here.</p>
      </div>
    </div>

         <p className=' mt-3'>
        Code Heads Membership Program, your dedicated space for mentoring and community engagement. Here, we empower tech leaders like you to make a meaningful impact in the lives of aspiring learners.
         </p>
         <p className=' mt-4'>
          <h3>Getting Started</h3>
        <h5> Log In with Your Mentor ID</h5>
         As a valued mentor, you can easily access your profile and membership benefits by logging in with your Mentor ID from the Code Heads Hub. This seamless process ensures that you can quickly engage with the platform and track your contributions without any hassle.
         </p>
        <p>
            <h3>Why Join the Membership Program?</h3>
            Joining the Code Heads Membership Program offers you exclusive access to a range of benefits designed to enhance your mentoring experience. As you share your knowledge and support learners, you’ll earn points and ratings that showcase your contributions and help you stand out within the community.
         
        </p>

        <p>
        <h3>Track Your Impact</h3>
        Your profile will display your progress, including points earned and feedback from learners. This visibility not only highlights your dedication but also motivates you to continue mentoring and engaging with the community.
          </p>
<hr></hr>
   <section className='earning-ways '>
   <h2 className='text-center p-3'>Ways of earning more points</h2>

      <div className="content   text-white text-center ">
      
        <div className='row row-cols-md-2  g-2 '>

        <div className="card text-white bg-primary mb-3 ">
          <div className="card-header">Get High Rating</div>
          <div className="card-body">
            <p className="card-text">Earn points by maintaining a 4.5-star rating or higher for your services. Higher ratings translate to better rewards!</p>
        </div>
        </div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Complete schedule</div>
          <div className="card-body">
            <p className="card-text">Each time a mentor completes a scheduled mentorship session or live class, they can earn points</p>
        </div>
        </div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Encourage Student</div>
          <div className="card-body">
            <p className="card-text">When your mentee successfully achieves their learning goal, both you and your mentee will earn bonus points!</p>
        </div>
        </div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Consistency</div>
          <div className="card-body">
            <p className="card-text">Mentors who maintain long-term mentoring relationships (e.g., 6 months or more) can be rewarded for their commitment</p>
        </div>
        </div>
   
      
      </div>
    </div>
 
   </section>


 </div>


  
  
  );
}

export default Home;