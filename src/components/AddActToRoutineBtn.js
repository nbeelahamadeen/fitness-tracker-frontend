import React from "react";
import { attachActivityToRoutine } from "../api";

const AddActivityToRoutine= (props)=>{
const {routineId, activityId,} = props;
const [ isEditing, setIsEditing] = useState(false);
const [count, setCount] =useState(null)
const [duration, setDuration] = useState(null)

return isEditing ? (
  <form className="attach"
    onSubmit={async (ev) => {
      ev.preventDefault();
      await attachActivityToRoutine({routineId, activityId, count, duration});
      await getUsersPublicRoutines({username: user.username, token})
      }}>
        <h3>Add this activity to routine:</h3>
        <h3>Count: <input placeholder="" value={count} onChange={(ev) => setCount(ev.target.value)} /></h3>
        <h3>Duration: <input value={duration} onChange={(ev) => setDuration(ev.target.value)} />
        </h3>
   
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false) }>Cancel</button>
  </form>
) : (
  <button onClick={() => {setIsEditing(true); console.log(activityId,"our actvitiyId")}}>Add Activity</button>
);
};

export default AddActivityToRoutine;