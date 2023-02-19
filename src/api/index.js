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

module.exports = {
  getAllRoutines,
  createRoutines,
};
