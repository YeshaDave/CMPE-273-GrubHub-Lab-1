const initialStore = {
    authFlag: false,
    errormsg:"",
   
}

export default function(state = initialStore, action) {
    if(action.type === "LOGIN" && action.statusCode == 201){
        return {
            ...state,
            authFlag :true
        }
    }
    if(action.type === "LOGIN" && action.statusCode == 202){
        return {
            ...state,
            authFlag :false,
            errormsg : "Credentials don't match"
        }
    }
    if(action.type === "LOGIN" && action.statusCode == 205){
        return {
            ...state,
            authFlag :false,
            errormsg : "User does not exist"
        }
    }

    return state;
}