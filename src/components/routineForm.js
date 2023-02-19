import React, { useState } from "react";
import { getAllRoutines, createRoutines } from "../api";

const RoutineForm = (props) => {
  const { token } = props;
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(null);

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

  const submitRoutine = (ev) => {
    ev.preventDefault();
    createRoutines({ token, name, goal, isPublic });
    getUsersPublicRoutines({username,token});
    // getAllRoutines();
  };

  return (
    <div>
      <h2>Set A New Routine</h2>
      <form onSubmit={(ev) => submitRoutine(ev)}>
        <h3>
          Name:{" "}
          <input
            placeholder="Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </h3>
        <h3>
          Goal:{" "}
          <input value={goal} onChange={(ev) => setGoal(ev.target.value)} />
        </h3>
        <h3>
          Visible to public :{" "}
          <select>
            <option
              id="Yes"
              value={true}
              onChange={(ev) => setIsPublic(ev.target.value)}
            >
              Yes
            </option>

            <option
              id="No"
              value={false}
              onChange={(ev) => setIsPublic(ev.target.value)}
            >
              No
            </option>
          </select>
        </h3>
        <button>Create Routine</button>
      </form>
    </div>
  );
};

export default RoutineForm;
