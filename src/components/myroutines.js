import React, { useState, useEffect } from "react";
import RoutineForm from "./routineForm";

const MyRoutines = (props) => {
  const { user, token } = props;
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
    console.log(result);
    return result;
  };

  useEffect(() => {
    getUsersPublicRoutines({ username, token });
  }, []);

  return (
    <div>
      <h2>My Routines</h2>
      <ul>
        <RoutineForm token={token} />
        {userRoutines.length ? (
          userRoutines.map((routine) => (
            <div key={routine.id}>
              <li>{routine.name}</li>
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
