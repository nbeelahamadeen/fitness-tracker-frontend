import React, { useState } from "react";

const ActivitiesForm = (props) => {
  const createActivity = props.createActivity;
  const token = props.token;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <h3>Add New Activity</h3>
      <div>
        <input
        placeholder="Name"
        name="name"
        value={name}
        onChange= {(ev)=> {setName(ev.target.value)}}
        />
      </div>
      <div>
        <input
        placeholder="Description"
        name="description"
        value={description}
        onChange= {(ev)=> {setDescription(ev.target.value)}}
        />
      </div>
      <button onClick= {() => createActivity(name, description)}>New Activity</button>
    </div>
  );
};

export default ActivitiesForm