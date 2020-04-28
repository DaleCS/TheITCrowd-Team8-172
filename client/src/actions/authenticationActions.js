import axios from "axios";

import { AUTH_LOADING, AUTH_ERROR, FINISHED_LOADING } from "./types";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export const registerUser = (newUser, history) => async (dispatch) => {
  // TODO: Validate user input

  dispatch({
    type: AUTH_LOADING,
  });
  try {
    const body = JSON.stringify(newUser);

    await axios.post("/api/user/register", body, config);
    dispatch({
      type: FINISHED_LOADING,
    });

    history.push("/login");
  } catch (errRes) {
    dispatch({
      type: AUTH_ERROR,
      payload: errRes.data,
    });
  }
};

export const loginUser = async (userCredentials, setLoading, history) => {
  setLoading(true);
  try {
    const body = JSON.stringify(userCredentials);

    const res = await axios.post("/api/user/login", body, config);

    console.log(res.data);

    localStorage.setItem("todotoken", res.data);

    setLoading(false);
    history.push("/dashboard");
  } catch (errRes) {
    console.log("Error encountered during log in");
    setLoading(false);
  }
};
