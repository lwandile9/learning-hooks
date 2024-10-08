import React from 'react';

const Home = ()=>{


    return (
    
      <div className='container fs-5'>


     <div className="video-background position-relative">
        <video class="w-100 h-100" autoplay muted loop>
            <source src="../assets/back-vid.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className="content position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1>Welcome to Code Heads</h1>
            <p>Your journey begins here.</p>
        </div>
    </div>


      <h1 className='text-center'>Welcome to Code Head Hub Loyalty program</h1> 
     
         <p className=' mt-3'>

          Welcome to the Code Heads Membership Program, your dedicated space for mentoring and community engagement. Here, we empower tech leaders like you to make a meaningful impact in the lives of aspiring learners.
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



<div className="card text-white bg-dark mb-3 text-light" >
  <div className="card-header">Current Running  Competition</div>
  <div className="card-body">
    <h5 className="card-title">Nov - Dec Competition</h5>
    <p className="card-text"> Win a asus viva book if you have 300 points</p>
  </div>
</div>



 </div>


  
  
  );
}

export default Home;