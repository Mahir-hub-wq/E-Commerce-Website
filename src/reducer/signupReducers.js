const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {},
  loading: false,
};

function signupReducer(state, action){
    switch (action.type) {
        case "UPDATE_FIELD":
            return{
                ...state,
                [action.field]: action.value,
            }
        case "SET_ERRORS":
            return{
                ...state,
                errors: action.payload
            }

        case "SET_LOADING": 
        return{
            ...state,
            loading: action.payload
        }
    
        default:
            return state
    }
}

export {initialState, signupReducer};