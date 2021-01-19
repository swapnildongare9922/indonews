function set(key, value) {
    if (key === undefined || value === undefined) {
        throw new Error("Key or Value can not undefined!");
    }
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, window.btoa(value));
}

function get(key, isObject = false) {
    if (typeof key === "undefined") {
        throw new Error("key can not undefined!");
    }
    let value = localStorage.getItem(key);
    if (value) {
        value = window.atob(value);
    }
    if (isObject) {
        return JSON.parse(value);
    }
    return value;
}

function reset() {
    localStorage.clear();
}


const storage = {
    set, get, reset
};


export default storage;