import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, friends!', likesCount: 34},
                {id: 2, message: 'Life is good!', likesCount: 30}
            ],
            newPostText: 'Placeholder'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'I working'},
                {id: 3, message: 'Welcome to the my World'}
            ],
            dialogs: [
                {id: 1, name: 'Evgeniy'},
                {id: 2, name: 'Julia'},
                {id: 3, name: 'Aleksandra'},
                {id: 4, name: 'Michail'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State is update');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action)  {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}

export default store;
window.state = store;
