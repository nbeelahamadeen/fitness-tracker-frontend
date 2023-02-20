import React, {useState} from "react";
import { editRoutine } from "../api";

const EditRoutineForm =(props)=>{
const {routineId, token} = props;
const [isEditing, setIsEditing] = useState(false);
const [ name, setName] = useState()
const [ goal, setGoal] = useState()

return isEditing ? (
  <form className="editForm"
    onSubmit={(ev) => {
      ev.preventDefault();
      editRoutine({routineId, token, name, goal});
      }}>
        <h3>Make changes to this routine below:</h3>
        <h3>Name: <input placeholder="" value={name} onChange={(ev) => setName(ev.target.value)} /></h3>
        <h3>Goal: <input value={goal} onChange={(ev) => setGoal(ev.target.value)} />
        </h3>
   
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
  </form>
) : (
  <button onClick={() => setIsEditing(true)}>Edit Routine</button>
);
};

export default EditRoutineForm;
