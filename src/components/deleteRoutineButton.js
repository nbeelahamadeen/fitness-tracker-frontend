import React, {useState} from 'react';

const DeleteRoutineButton = ({ routineId, token}) =>{
const [user, setUserRoutines] = useState("");
const {username} = user
  const getUsersPublicRoutines = async ({ username, token }) => {
    console.log(token,"this is our token")
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();
    setUserRoutines(result);
    console.log(result,"these are all of the routines");
    return result;
  };


const deleteRoutine  = ({routineId, token, username}) =>{
  //console.log(token);
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then((response) => response.json())
  .then(() => {
    getUsersPublicRoutines({ username, token})
    window.location.reload(false);
  })
  .catch(console.error);
};
return (
    <button onClick={() => deleteRoutine({routineId, token, username})}>Delete Routines</button>
  );
};

export default DeleteRoutineButton;