export function login(email, password) {
    return {
        type: "LOGIN",
        data: {email, password}
    }
}

export function register(data) {
    return {
        data,
        type: "REGISTER"
    }
}