import React, {useState} from "react";
import { editActivity } from "../api";

const EditActiviesForm =(props)=>{
const {activityId, token, user, getUsersPublicRoutines} = props;
const [isEditing, setIsEditing] = useState(false);
const [ name, setName] = useState("")
const [ description, setDescription] = useState("")

return isEditing ? (
  <form className="editForm"
    onSubmit={async (ev) => {
      ev.preventDefault();
      await editActivity({activityId, token, name, description});
      await getUsersPublicRoutines({username: user.username, token})
      }}>
        <h3>Make changes to this activity below:</h3>
        <h3>Name: <input placeholder="" value={name} onChange={(ev) => setName(ev.target.value)} /></h3>
        <h3>Description: <input value={description} onChange={(ev) => setDescription(ev.target.value)} />
        </h3>
   
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false) }>Cancel</button>
  </form>
) : (
  <button onClick={() => {setIsEditing(true); console.log(activityId,"our actvitiyId")}}>Edit Activity</button>
);
};

export default EditActiviesForm;
