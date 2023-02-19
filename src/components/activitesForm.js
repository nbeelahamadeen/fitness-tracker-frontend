import React, { useState } from "react";
import { createActivity } from "../api";

const ActivitiesForm = (props) => {
  const { token} = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitActivity = (ev) => {
    ev.preventDefault();
    createActivity({ token, name, description });
    // getUsersPublicRoutines({username,token});
    // getAllRoutines();
  };

  return (
    <div>
      <h3>Add New Activity</h3>
      <form onSubmit={(ev) => submitActivity(ev)}>
      <div>
         <h3> Name: 
        <input
        placeholder="Name"
        name="name"
        value={name}
        onChange= {(ev)=> {setName(ev.target.value)}}
        /></h3>
      </div>
      <div>
        <h3>
          Description: 
        <input
        placeholder="Description"
        name="description"
        value={description}
        onChange= {(ev)=> {setDescription(ev.target.value)}}
        />
        </h3>
      </div>
      <button >Create New Activity</button>
      </form>
    </div>
  );
};

export default ActivitiesForm