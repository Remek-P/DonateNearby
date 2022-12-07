//reducer for handling multiple functions for provider
export function AppReducer(state, action) {
    switch (action.type) {
        // case "Validate-user-email":
        //     return {
        //         ...state,
        //         loginDatabase: state.loginDatabase.map(user => {
        //             if (user.login === action.payload.email) {
        //                 return user.login
        //             }
        //             return user.login
        //         })
        //     };
        case "Register-user":
            return {
                ...state,
                loginDatabase: state.loginDatabase.map(user => {
                    if (user.login === action.payload) {
                        user.isLogged = false;
                    }
                    return user;
                }),
                loggedUser: []
            };
        case "Login-user":
            return {
                ...state,
                loginDatabase: state.loginDatabase.map(user => {
                    if (user.login === action.payload.email && user.password === action.payload.password) {
                        user.isLogged = true;
                    }
                    return user;
                }),
                loggedUser: state.loginDatabase.some(user => user.isLogged === true) ? state.loginDatabase.filter(user => user.isLogged === true)[0].login : [],
            };
        case "Logout-user":
            return {
                ...state,
                loginDatabase: state.loginDatabase.map(user => {
                    if (user.login === action.payload) {
                        user.isLogged = false;
                    }
                    return user;
                }),
                loggedUser: []
            };
        default:
            return state;
    }
}