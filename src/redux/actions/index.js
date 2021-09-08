// https://jsonplaceholder.typicode.com/users

import axios from "axios";

export const getData = () => {
  return async (dispatch) => {
    const api = await axios("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: "GET_DATA", payload: api });
  };
};
