import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello, friends!', likesCount: 34},
        {id: 2, message: 'Life is good!', likesCount: 30}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 44
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        }

        case DELETE_POST: {

            return {
                ...state,
                posts: [...state.posts.filter(p => p.id != action.postId)]
            };

        }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setStatus = (status) => ({ type: SET_STATUS, status})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;