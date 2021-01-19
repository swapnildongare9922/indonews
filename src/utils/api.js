import helper from "./helper";
import axios from "axios";

function init(user) {
    if (!user) {
        user = helper.user();
    }
    if (user) {
        apiUtils.setHeaderAuthToken(user.token);
    }
}

axios.interceptors.response.use(
    response => {
        return response;
    },
    (error) => {
        // if (error.response.status === 401) {
        //      console.log("call the functi");
        //   //  helper.logout();
        // }
        return Promise.reject(error);
    }
);

function instance() {
    return axios;
}

export const apiUtils = {
    setHeaderAuthToken: token => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`,
    removeHeaderAuthToken: () => axios.defaults.headers.common["Authorization"] = undefined
};

const api = {
    instance,
    init
};
export default api;
