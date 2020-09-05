import * as userAPI from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = userId => dispatch => (
    userAPI.getUser(userId).then(user => dispatch(receiveUser(user)))
);

export const fetchAllUsers = () => dispatch => (
    userAPI.getAllUsers().then(users => dispatch(receiveAllUsers(users)))
);