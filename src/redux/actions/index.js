// https://jsonplaceholder.typicode.com/users

import axios from "axios";

export const getData = () => {
  //////////////////////////// Both are working ///////////////////////////////////
  // return async (dispatch) => {
  //   const api = await axios("https://jsonplaceholder.typicode.com/users");
  //   dispatch({ type: "GET_DATA", payload: api });
  // };

  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users", {})
      .then((api) => {
        dispatch({ type: "GET_DATA", payload: api });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
