//Routine functions
const MAIN_URL = "http://fitnesstrac-kr.herokuapp.com";

const getAllRoutines = async () => {
  let result;
  await fetch(`${MAIN_URL}/api/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      result= response
      return response;
    })
    .catch(console.error);
    return result;
};

const createRoutines = async ({ name, goal, isPublic, token }) => {
  await fetch(`${MAIN_URL}/api/routines`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      goal,
      isPublic,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch(console.error);
};

const editRoutine = async({routineId, name, goal, token})=>{
await fetch(`${MAIN_URL}/api/routines/${routineId}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "Application/json",
    "Authorization": `Bearer ${token}`,
  },
  body: JSON.stringify({
    name,
    goal,
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
    return result;
  })
  .catch(console.error);
}

// Activity fetch calls 
const createActivity = async ({name, description, token})=>{
  await fetch(`${MAIN_URL}/api/activities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, //we needed to pass a token in order for it to work
    },
    body: JSON.stringify({ 
        name,
        description
    })
}
  )
  .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
      // after successful create
      // refresh posts
      
    })
    .catch(console.error);
}

const editActivity = async ({activityId, name, description, token}) => {
  await fetch(`${MAIN_URL}/api/activities/${activityId}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, //we needed to pass a token in order for it to work
    },
    body: JSON.stringify({ 
        name,
        description
    })
}
  )
  .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
      // after successful create
      // refresh posts
      
    })
    .catch(console.error);
}

module.exports = {
  getAllRoutines,
  createRoutines,
  createActivity,
  editRoutine,
  editActivity,
};
