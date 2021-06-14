const ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT';
const ADD_MESSAGE = "ADD_MESSAGE";
const dialogsReducer: any = (state: any, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE_TEXT :
            state.messageText = action.messageText;
            return state;
        case ADD_MESSAGE :
            let message = {id: '0', message: state.messageText};
            state.messageData.push(message);
            state.messageText = '';
            return state;
        default :
            return state;

    }

}
export const addMessageTextActionCreator: any = (text:any) => ({type: ADD_MESSAGE_TEXT, messageText: text});
export const addMessageActionCreator: any = () => ({type: ADD_MESSAGE});
export default dialogsReducer;