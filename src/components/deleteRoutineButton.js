import React, {useState} from 'react';

const DeletePostButton = ({ routineId, token}) =>{
const [user, setUserRoutines] = useState("");
  const getUsersPublicRoutines = async ({ username, token }) => {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    setUserRoutines(result);
    console.log(result,"these are all of the routines");
    return result;
  };


const deletePost  = (routineId, token, username) =>{
  //console.log(token);
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then((response) => response.json())
  .then(() => {
    getUsersPublicRoutines(username)
  })
  .catch(console.error);
};
return (
    <button onClick={() => deletePost(routineId, token)}>Delete Routines</button>
  );
};

export default DeletePostButton;