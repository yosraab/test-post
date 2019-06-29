import axios from 'axios';
import { remoteAPI } from './config';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';



export const fetchAllUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_REQUEST });
  return axios.get(`${remoteAPI}/users`)
    .then(response => {
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error });
    });
};



export const deleteUser = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_USER_REQUEST });
  const {
    auth: { token },
  } = getState();
  return  fetch(`${remoteAPI}/user/${id}`, {
    method: 'delete',
  })

    .then(() =>
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: { id },
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: {
          message: err.message,
        },
      })
    );
};
