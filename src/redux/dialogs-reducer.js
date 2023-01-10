const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SEND_MESSAGE:  
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }]
            };
               
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;