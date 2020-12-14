import { authenticateLogin } from '../../components/services/httpService'

const initialState = {
    loggedIn: false,
    user: {}
}

async function authReducer(state=initialState, action) {
    console.log(action);
    const currentData = action.data
    if(action.type === "LOGIN") {
        
    } else if(action.type === "REGISER") {
        // current data
        // Register functionlity
        // return true | false
    }
    return state
}

export default authReducer