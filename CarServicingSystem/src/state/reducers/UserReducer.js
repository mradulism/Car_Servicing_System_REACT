const reducer = (users = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'get_User':
            users = action.payload;
            return users;
        case 'del_User':
            users = action.payload
            return users;
        case 'add_User':
            users = [...users, action.payload];
            return users;
        case 'upd_User':
            return users;
        case "SET_FIRE_USERID":
            console.log('fire called', action.payload);
            sessionStorage.setItem("authenticatedUserId", action.payload.id);
            sessionStorage.setItem("authenticatedUsername", action.payload.email);
            sessionStorage.setItem("authenticatedFirstName", action.payload.name);
            users = [...users, action.payload];
            return users;
        default:
            return users
    }
}
export default reducer