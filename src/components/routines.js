import React, { useState, useEffect } from "react";

const Routines = ({ routinesO }) => {
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    fetch("http://fitnesstrac-kr.herokuapp.com/api/routines", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  });

  return (
    <div>
      <h2>Routines ({routinesO.length})</h2>
      <ul>
        {routines.map((routine) => {
          {
            return (
              <li key={routine.id}>
                {routine.name} ({routine.activities.length})
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Routines;
