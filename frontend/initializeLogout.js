// src/initializeLogout.js
import authService from "./src/appwrite/auth";

const initializeLogout = async () => {
    try {
        await authService.logout();
        console.log('Logged out any existing session');
    } catch (error) {
        console.error('Error logging out:', error);
    }
};

export default initializeLogout;