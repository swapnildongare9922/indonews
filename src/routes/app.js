const appRoutes = {
    base: "/",
    auth: {
        login: "/login",
        register: "/register",
        forgotPassword: "/forgot-password",
        resetPassword: "/reset-password",
        changePassword: "/change-password",
        logout: '/'
    },    
    app: {
        blog: {
            list: "/blogs",
            add: "/blog/add", 
            update:"/blog/edit/:id",          
        },
        news: {
            news_details: "/news-details",
        },
        preference: {
            preferences: "/preference",   
        },
        profile: {
            my_profile: "/my-profile",
            update_profile: "/update-profile",   
        },
    }
   }
export default appRoutes;
