import storage from "./storage";
const AUTH_KEY="dsdsads54555aqhh";

export function formData(data) {
    let form = new FormData();
    Object.entries(data).forEach((d) => {
        form.append(d[0], d[1]);
    });
    return form;
}

function storeLogin(user) {
    try {
        if (typeof user === 'undefined') {
            throw new Error("User can not undefined!");
        }
        if (typeof user !== 'object') {
            throw new Error("user must be object!");
        }
        //api.init(user);
        storage.set(AUTH_KEY, user);
    } catch (e) {
        console.log(e);
    }
}

export function user() {
    try {
        const value = storage.get(AUTH_KEY, true);
        if (value) {
            return value;
        }
    } catch (e) {
        console.log(e);
    }
    return null;
}

function logout() {
    try {
        storage.reset();
        window.location = "/";
    } catch (e) {
       console.log(e);
    }
}


const helper = {
    logout,
    storeLogin,
    user,

};

export default helper;
