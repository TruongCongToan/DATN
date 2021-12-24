const initialState = {
    language:'vi',
    user:[],
    loggedIn:false,

}
const currentUser =(state =initialState, action) => {
    switch(action.type){
        case 'ADD_USER':
          { return {
              ...state,
              user: action.payload,
              loggedIn:true,
              language:'vi'
          }}
       
    
    case "LOG_OUT":
        {
            return {
                ...state,
                user: {},
                loggedIn: false
            }
         }
     default:
            return state;
    }
}
export default  currentUser;