const ADD_USER = 'ADD_USER';

const addUser = (userObj) =>{
    return {
        type: ADD_USER,
        payload: userObj
    }
}
const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}
export default {addUser,logOut};