import React, { useEffect, useState } from 'react';
import { SelectUser } from '../components/selectUser';


const Profile = () => {
  
  const [selectedProfile, setSelectedProfile] = useState("");

  
  const handleSelectedUser = (event) => {
    setSelectedProfile(event.target.value);
  };


  useEffect(() => {
    if (selectedProfile) {
       alert("Profile Changed");
    }
  }, [selectedProfile]);

  return (
    <div className='container'>
      <h1 className='text-center'>User Profile</h1>
      <hr />

      <p className='p-3 fw-bold fs-3'>Please Select a user Profile below :</p>
     
      <SelectUser handleSelectedUser={handleSelectedUser} />
    </div>
  );
};

export default Profile;
