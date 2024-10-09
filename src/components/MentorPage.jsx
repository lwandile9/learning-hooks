import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const MentorProfile = ({ mentor }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Profile Picture and Basic Info */}
        <div className="col-md-4 text-center">
          <img 
            src={mentor.profilePicture} 
            alt={`${mentor.name} ${mentor.surname}`} 
            className="img-fluid rounded-circle mb-3" 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
          />
          <h2>{mentor.name} {mentor.surname}</h2>
          <p className="text-muted">Mentor</p>
        </div>

        {/* Mentor Details */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Points: {mentor.points}</h3>
              
              {/* Rating */}
              <h4>Rating:</h4>
              <div className="rating mb-3">
                {renderRating(mentor.rating)}
              </div>
              
              {/* Social Media Links */}
              <h4>Connect:</h4>
              <ul className="list-inline">
                {mentor.socialMedia.facebook && (
                  <li className="list-inline-item">
                    <a href={mentor.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="text-primary" size="30" />
                    </a>
                  </li>
                )}
                {mentor.socialMedia.twitter && (
                  <li className="list-inline-item">
                    <a href={mentor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-info" size="30" />
                    </a>
                  </li>
                )}
                {mentor.socialMedia.linkedin && (
                  <li className="list-inline-item">
                    <a href={mentor.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-primary" size="30" />
                    </a>
                  </li>
                )}
                {mentor.socialMedia.instagram && (
                  <li className="list-inline-item">
                    <a href={mentor.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-danger" size="30" />
                    </a>
                  </li>
                )}
              </ul>

              {/* Additional Info */}
              <p>{mentor.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <p>{mentor.sum}</p>
    </div>
  );
};



// Helper function to render the star rating
const renderRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => <FaStar key={index} className="text-warning" size="25" />)}
      {halfStar && <FaStarHalfAlt className="text-warning" size="25" />}
      {[...Array(emptyStars)].map((_, index) => <FaRegStar key={index} className="text-warning" size="25" />)}
    </>
  );
};

//  mentor data as props
const mentorData = {
  name: "Lwandile",
  surname: "Toto",
  profilePicture: "https://via.placeholder.com/200",
  points: 15,
  rating: 4.5,
  socialMedia: {
    facebook: "https://facebook.com/mentorprofile",
    twitter: "https://twitter.com/mentorprofile",
    linkedin: "https://linkedin.com/in/mentorprofile",
    instagram: "https://instagram.com/mentorprofile"
  },
  bio: "Software develop specializing in  Javascript ",
  sum: "Hello! I'm Lwandile Toto a Tech Assistant at Code Head's Hub with a passion for advancing technology and making a positive impact. Currently, I’m enhancing my skills through the ABSA Software Development Internship Program, focusing on HTML5, CSS3, Python, JavaScript, Java, Node.js, and React. In my role as Absa Software Developer Intern and through my training at CAPACITi, I will gain hands-on experience in building diverse applications. My projects include developing Windows applications with Java and NetBeans Swing, such as a Fleet Management System and a School Management System, both utilizing MySQL databases with JDBC connectivity. Additionally, I’ve developed a Dairy App using Java in Android Studio, showcasing my expertise in mobile app development. My mission is to use technology to solve real-world problems and to empower the next generation of tech enthusiasts. This drive fuels my work and my contributions to code head’s hub community, where I aim to guide youth in navigating tech careers and discovering their potential in the tech industry."
};

// showing MentorProfile 
const MentorPage = () => {
  return <MentorProfile mentor={mentorData} />;
};

export default MentorPage;
