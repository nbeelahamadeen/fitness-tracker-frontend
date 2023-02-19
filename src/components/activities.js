
import React, { useState, useEffect } from "react";
import ActivitiesForm from "./activitesForm";

const Activities = (props) => {
  const [ activities, setActivities] = useState([]);
  const [activity, setActivity] = useState([])

  const token = props.token
  const name = props.name
  const description = props.description
  
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

   const createActivity = (name, description)=>{
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, //we needed to pass a token in order for it to work
      },
      body: JSON.stringify({
        activity:{
          name: name,
          description: description
        }
      })
  }
    )
    .then((response) => response.json())
      .then((result) => {
        const activity = result.data.activities
        setActivity(activity)
        console.log(result);
        // after successful create
        // refresh posts
        getAllActivities();
      })
      .catch(console.error);
  }

  return (
    <div>
      <h2>Activities ({activities.length})</h2>
      <ActivitiesForm createActivity={createActivity} token={token}/>
      <ul>
        {activities.map((activity) => {
          {
            return (
              <li key={activity.id}>
                <h3>{activity.name}</h3>
                <p>Description: {activity.description}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Activities;
