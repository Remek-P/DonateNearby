//reducer for handling multiple functions for provider
export function AppReducer(state, action) {
    switch (action.type) {
        case "Validate-user-email":
            return {
                ...state,
                loginDatabase: state.loginDatabase.map(user => {
                    if (user.login === action.payload.email) {
                        return user.login
                    }
                    return user.login
                })
            };
        case "Login-user":
            return {
                ...state,
                loginDatabase: state.loginDatabase.map(user => {
                    if (user.login === action.payload.email && user.password === action.payload.password) {
                        user.isLogged = true;
                        state.loggedUser.push(user.login)
                    }
                    return user
                }),
            };
        default:
            return state;
    }
}