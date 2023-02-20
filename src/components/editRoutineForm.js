import React, {useState} from "react";
import { editRoutine } from "../api";

const EditRoutineForm =(props)=>{
const {routineId, token, user, getUsersPublicRoutines} = props;
const [isEditing, setIsEditing] = useState(false);
const [ name, setName] = useState("")
const [ goal, setGoal] = useState("")


return isEditing ? (
  <form className="editForm"
    onSubmit={async (ev) => {
      ev.preventDefault();
      await editRoutine({routineId, token, name, goal});
      await getUsersPublicRoutines({username: user.username, token})
      }}>
        <h3>Make changes to this routine below:</h3>
        <h3>Name: <input placeholder="" value={name} onChange={(ev) => setName(ev.target.value)} /></h3>
        <h3>Goal: <input value={goal} onChange={(ev) => setGoal(ev.target.value)} />
        </h3>
   
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false) }>Cancel</button>
  </form>
) : (
  <button onClick={() => {setIsEditing(true); console.log(routineId,"our routinId")}}>Edit Routine</button>
);
};

export default EditRoutineForm;
