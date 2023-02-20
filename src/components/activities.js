
import React, { useState, useEffect } from "react";
import ActivitiesForm from "./activitesForm";
import EditActiviesForm from "./editActivitiesButton";

const Activities = (props) => {
  const {token} = props
  const [ activities, setActivities] = useState([]);
 
  const getAllActivities = ()=>{
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(result => {
        setActivities(result);
      })
      .catch(console.error);
    }
  useEffect(()=>{
   getAllActivities()
  });

   

  return (
    <div>
      <h2>Activities ({activities.length})</h2>
    {token ? (<ActivitiesForm token={token}/>) : null}
      <ul>
        {activities.map((activity) => {
          {
            return (
              <li key={activity.id}>
                <h3>Name: {activity.name}</h3>
                <h3>Description: {activity.description}</h3>
                
                {token ? ( <EditActiviesForm activityId={activity.id} token={token}/>) : null}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Activities;
