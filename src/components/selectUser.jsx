import React  from "react";



export const SelectUser = ({ handleSelectedUser }) => {

    return (

    <select onChange={ handleSelectedUser } class="form-select" aria-label="Default select example">
      <option selected disabled>Open to select user</option>
      <option value="lwandile">Lwandile</option>
      <option value="2">Njabulo</option>
      <option value="3">Gcina</option>
      <option value="3">New user </option>
    </select>

    )
}




