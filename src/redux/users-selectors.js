import {createSelector} from "reselect";

export const getUsersSuper = (state) => { // простой селектор
    return state.usersPage.users;
}

export const getUsers = createSelector( getUsersSuper, // сложный селектор вызывает простой
    (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

