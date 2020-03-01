import {AsyncStorage} from 'react-native';

module.exports = class {
    static async saveUser(user) {
        try {
            if (user)
                await AsyncStorage.setItem('user', JSON.stringify(user));
            else
                await AsyncStorage.removeItem('user');

        } catch (e) {
            throw(e);
        }
    }

    static async getUser() {
        try {
            let userString = await AsyncStorage.getItem('user');
            if (userString && userString.length > 0) {
                return JSON.parse(userString);
            }
            return null;
        } catch (e) {
            throw(e);
        }
    }

    static async saveAccessToken(accessToken) {
        try {
            if (accessToken)
                await AsyncStorage.setItem('accessToken', accessToken);
            else
                await AsyncStorage.removeItem('accessToken');
        } catch (e) {
            throw(e);
        }
    }

    static async getAccessToken() {
        try {
            let accessToken = await AsyncStorage.getItem('accessToken');
            return accessToken;
        } catch (e) {
            throw(e);
        }
    }
};