import React  from "react";



export const SelectUser = ({ handleSelectedUser }) => {

    return (

    <select onChange={ handleSelectedUser } class="form-select" aria-label="Default select example">
      <option selected disabled>Open to Action</option>
      <option value="lwandile">My Profile</option>
      <option value="programs">My programs</option>
      <option value="le
      ader">Leaderboard</option>
      <option value="">Offers</option>
    </select>

    )
}




