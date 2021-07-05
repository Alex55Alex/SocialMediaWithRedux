const ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT';
const ADD_MESSAGE = "ADD_MESSAGE";
const initialState = {
    dialogsData: [
        {id: '1', name: "Alex"},
        {id: '2', name: "Vova"},
        {id: '3', name: "Evgen"},
        {id: '4', name: "Petya"},
        {id: '5', name: "Viktor"},
        {id: '6', name: "Valera"},
        {id: '7', name: "Vasya"}
    ],
    messageData: [
        {id: '0', message: "How are you?)"},
        {id: '1', message: "Hi"},
        {id: '2', message: "I am very tired"}
    ],
    messageText: ''
}
const dialogsReducer: any = (state: any = initialState, action: any) => {
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
export const addMessageTextActionCreator: any = (text: any) => ({type: ADD_MESSAGE_TEXT, messageText: text});
export const addMessageActionCreator: any = () => ({type: ADD_MESSAGE});
export default dialogsReducer;