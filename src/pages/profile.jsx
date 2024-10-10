import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { SelectUser } from '../components/selectUser';

const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState("");
  const navigate = useNavigate(); 


  const handleSelectedUser = (event) => {
    const selectedValue = event.target.value;
    setSelectedProfile(selectedValue);
    
   
    navigate(`/components/${selectedValue}`);
  };
  
  useEffect(() => {
    if (selectedProfile) {
      alert("Profile Changed");
    }
  }, [selectedProfile]);

  return (
    <div className='container'>
      <h1 className='text-center'>Mentor Profile</h1>
      <hr />
      <p className='p-3 fw-bold fs-3'>Please Select Action:</p>
      <SelectUser handleSelectedUser={handleSelectedUser} />
    </div>
  );
};

export default Profile;
