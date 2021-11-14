import request from 'request';

export const addUserToSMTP = (options) => {
    return new Promise(async (resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            console.log(body);
            try {
                resolve(body);
            } catch (error) {
                reject(error);
            }
        });
    });
};

export const sendEmail = (options) => {
    return new Promise(async (resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            console.log(body);
            try {
                resolve(body);
            } catch (error) {
                reject(error);
            }
        });
    });
};


export const sendSms = (options) => {
    return new Promise(async (resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            console.log(body);
            try {
                resolve(body);
            } catch (error) {
                reject(error);
            }
        });
    });
};


export const sendViaWhatsapp = (options) => {
    return new Promise(async (resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            console.log(body);
            try {
                resolve(body);
            } catch (error) {
                reject(error);
            }
        });
    });
};


