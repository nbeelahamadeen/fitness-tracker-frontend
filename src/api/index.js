//Routine functions
const MAIN_URL = 'http://fitnesstrac-kr.herokuapp.com';

const getAllRoutines = async() => {
    await fetch(`${MAIN_URL}/api/routines`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(response => {
          console.log(response);
          return response;
        
        })
        .catch(console.error);
    };

module.exports ={
    getAllRoutines
}