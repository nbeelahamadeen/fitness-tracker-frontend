import React, { useState, useEffect } from "react";
import Activities from "./activities";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    fetch("http://fitnesstrac-kr.herokuapp.com/api/routines", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setRoutines(result);
      })
      .catch(console.error);
  });

  return (
    <div>
      <h2>Routines ({routines.length})</h2>
      <ul>
        {routines.map((routine) => {
          {
            return (
              <div key={routine.id}>
                <h3>
                  Routine:{routine.name} ({routine.activities.length})
                </h3>
                <li>Goal:{routine.goal}</li>
                <li>Track Creator:{routine.creatorName}</li>
                {routine.activities.map((activity) => {
                  return (
                    <div key={activity.id}>
                      <h3>Activity:{activity.name}</h3>
                      <li>Description: {activity.description}</li>
                      <li>Duration: {activity.duration}</li>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Routines;
