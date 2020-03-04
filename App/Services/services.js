import api from './serviceContext';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import psm from '../Globals/PersistentStorageManager';
import {
    Alert
} from 'react-native';
export async function register(fullname, username, email, phone, password, passwordSecurity, referralUsername,checked) {
    try {
            
            const user = await api
                .service("api/users")
                .create({
                    userName: username,
                    email: email,
                    password: password,
                    phone: phone,
                    fullName: fullname,
                    password2: passwordSecurity,
                    referralUserName: referralUsername
                });

            return user;

    } catch (e) {
        throw e;
    }
}

export async function login(emailOrUsernameOrPhone, password) {
    try {
        let email = emailOrUsernameOrPhone;
        let userName = emailOrUsernameOrPhone;
        let phone = emailOrUsernameOrPhone;

        let strategy = 'local-username';

        if (!isEmail(email)) {
            strategy = 'local-email';
            Alert.alert('Email badly formated')
            return;
        }

        if (isMobilePhone(phone)) {
            strategy = 'local-phone';
            Alert.alert('Phone number badly formated')
            return;
        }


        const { user, accessToken } = await api
            .service("/api/authentication")
            .create({
                strategy,
                userName,
                email,
                phone,
                password
            });

        await psm.saveUser(user);
        await psm.saveAccessToken(accessToken);
    } catch (e) {
        alert(e.message);
        throw e;
    }
}

export async function getMyTeams(userId, accessToken) {
    try {
        const response = await api
            .service("/api/users/" + userId + "/tree-view")
            .get(null, {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
        console.log(response);
        return response;
    } catch (e) {
        throw e;
    }
}

export async function getWallet(userId, accessToken) {
    try {
        const response = await api
            .service("/api/users/" + userId + "/wallet")
            .get(null, {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
        console.log(response);
        return response;
    } catch (e) {
        throw e;
    }
}

export async function getAllOrders(userId, accessToken) {
    try {
        const response = await api
            .service("/api/orders")
            .find({
                query: {
                    $view: {
                        hUser: userId
                    }
                },
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
        console.log(response);
        return response;
    } catch (e) {
        throw e;
    }
}

export async function getAllTickets(userId, accessToken) {
    try {
        const response = await api
            .service("/api/users/" + userId + "/tickets")
            .get(null, {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
        console.log(response);
        return response;
    } catch (e) {
        throw e;
    }
}

export async function sellTicket(userId, amount, receiveEffective, receiveToken, securityPassword, accessToken) {
    try {
        const response = await api
            .service("/api/sell_ticket")
            .create({
                hUser: userId,
                amount: amount,
                receiveEfective: receiveEffective,
                receiveToken: receiveToken,
                password2: securityPassword
            }, {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
        console.log(response);
        return response;
    } catch (e) {
        throw e;
    }
}

export async function getAllPacks(accessToken) {
    try {
        const response = await api
            .service("/api/packs")
            .get(null, {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
        console.log(response);
        return response;
    } catch (e) {
        throw e;
    }
}

export async function buyTicket(userId, packId, receiveEffective, receiveToken, accessToken) {
    try {
        const response = await api
            .service("/api/buy_ticket")
            .create({
                hUser: userId,
                hPack: packId,
                receiveEfective: receiveEffective,
                receiveToken: receiveToken,
            }, {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
        console.log(response);
        return response;
    } catch (e) {
        throw e;
    }
}