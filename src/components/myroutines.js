import React, { useState, useEffect } from "react";
import EditRoutineForm from "./editRoutineForm";
import RoutineForm from "./routineForm";
import DeletePostButton from "./deleteRoutineButton";

const MyRoutines = (props) => {
  const { routineId, user, token } = props;
  const { username } = user;
  const [userRoutines, setUserRoutines] = useState([]);

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

  useEffect(() => {
    getUsersPublicRoutines({ username, token });
  }, []);


  // const deleteRoutines = async (routineId) => {
  //   await  fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
  //     method: "DELETE",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     }
  //   }).then(response => response.json())//add fetch
  //     .then((result) => {

  //       console.log(result)
      
  //       // after successful delete
  //       // refresh posts
  //     getUsersPublicRoutines();
  //     })
  //     .catch(console.error);
  // }
  return (
    <div>
      <h2>My Routines</h2>
      <ul>
        <RoutineForm token={token} />
        {userRoutines.length ? (
          userRoutines.map((routine) => (
            <div key={routine.id}>
              <li>{routine.name}</li>
              <EditRoutineForm token={token} routineId={routineId}/>
              <DeletePostButton token={token} routineId={routineId}/>
            </div>
          ))
        ) : (
          <div>
            <h2>You are not tracking any workouts </h2>
          </div>
        )}
      </ul>
    </div>
  );
};

export default MyRoutines;
