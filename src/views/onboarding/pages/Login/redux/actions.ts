import { SET_USER, LOADING_USER, SET_AUTHENTICATED } from "./types";
import { API } from "../../../../../helpers/api";

//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
  dispatch({ type: LOADING_USER });
  API.get("/user/me")
    .then((res) => {
      localStorage.setItem("username", res.data.payload.username); //setting username to local storage
      dispatch({
        type: SET_USER,
        payload: res.data.payload,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//check user authetication status
export const checkAuth = () => (dispatch: any) => {
  const token = localStorage.getItem("token");

  if (token) {
    API.defaults.headers.common["Authorization"] = token; //setting authorize token to header in axios
    dispatch(getUserData());
    dispatch({ type: SET_AUTHENTICATED });
  }
};
